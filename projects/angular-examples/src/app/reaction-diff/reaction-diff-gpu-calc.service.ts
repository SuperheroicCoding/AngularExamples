import {ReactionDiffCalcParams} from './reaction-diff-calc-params';
import {CellWeights, weightsToArray} from './cell-weights';
import {ReactionDiffCalculator} from './reaction-diff-calculator';
import {Observable} from 'rxjs';
import {GpuJsService, GpuJsTexture, GraphicalKernelFunction, TextureKernelFunction} from '../core/gpujs.service';
import {ReactionDiffKernelModules} from './reaction-diff-window';

export class ReactionDiffGpuCalcService implements ReactionDiffCalculator {

  grid: GpuJsTexture;
  numberThreads = 1;
  private lastNextCalc = 0;
  private weights: number[];
  private addChemicalRadius: number;
  private calcNextKernels: { first: TextureKernelFunction, second: TextureKernelFunction };
  private speed: number;
  private imageKernel: GraphicalKernelFunction;
  private calcParams: ReactionDiffCalcParams;
  private nextAddChemicals: (number | number | number | number)[] = [0, 0, 0, 0];
  private nextImage: HTMLCanvasElement;
  private initGridKernel: TextureKernelFunction;
  private initialized = false;

  constructor(private width: number,
              private height: number,
              calcParams$: Observable<ReactionDiffCalcParams>,
              calcCellWeights$: Observable<CellWeights>,
              addChemicalRadius$: Observable<number>,
              speed$: Observable<number>,
              private gpuJs: GpuJsService,
              private kernels: ReactionDiffKernelModules) {
    calcParams$.subscribe((calcParams) => {
      this.setCalcParams(calcParams);
    });
    calcCellWeights$.subscribe((weights) => this.setWeights(weights));
    addChemicalRadius$.subscribe((radius) => this.addChemicalRadius = radius);
    speed$.subscribe((speed) => this.speed = speed);
    this.init();
  }

  reset(): void {
    this.initGrid();
    this.addChemical(this.width / 2, this.height / 2);
  }

  private init() {
    this.initGrid();

    const first = this.createCalcNextGpuKernel();
    const second = this.createCalcNextGpuKernel();
    this.calcNextKernels = {
      first,
      second
    };

    this.imageKernel = this.createImageKernel();
    this.addChemical(this.width / 2, this.height / 2);
    this.initialized = true;
  }

  addChemical(x: number, y: number): void {
    const r = this.addChemicalRadius;
    this.nextAddChemicals = [x, y, r, 1.0];
    this.calcNext(1);
  }

  resize(width: number, height: number): void {
    this.initialized = false;
    this.width = width;
    this.height = height;
    this.grid.delete();
    this.initGridKernel = null;
    this.init();
  }

  calcNext(repeat: number = this.speed): void {
    const calcParams = [
      this.calcParams.diffRateA,
      this.calcParams.diffRateB,
      this.calcParams.feedRate,
      this.calcParams.killRate,
      this.calcParams.dynamicKillFeed ? 1. : 0.
    ];

    for (let i = 0; i < repeat; i++) {
      // using texture swap to prevent input texture == output texture webGl error;

      const calcKernel = this.lastNextCalc === 0 ? this.calcNextKernels.first : this.calcNextKernels.second;
      this.grid = calcKernel(
        this.grid,
        this.weights,
        calcParams,
        this.nextAddChemicals
      );
      this.lastNextCalc = (this.lastNextCalc + 1) % 2;
      this.nextAddChemicals = [0, 0, 0, 0];
    }
    this.imageKernel(this.grid);
    this.nextImage = this.imageKernel.getCanvas();
  }

  initGrid() {

    if (!this.initGridKernel) {
      this.initGridKernel = this.gpuJs.createKernel(function initGrid() {
        return 1.0 - (this.thread.z % 2.0);
      })
        .setOutput([this.width, this.height, 2])
        .setFloatOutput(true)
        .setFloatTextures(true)
        .setOutputToTexture(true);
    }
    this.grid = this.initGridKernel();
  }

  private setWeights(weights: CellWeights) {
    this.weights = weightsToArray(weights);
  }

  private setCalcParams(calcParams: ReactionDiffCalcParams) {
    this.calcParams = calcParams;
  }

  drawImage(p: any) {
    if (!this.initialized) {
      return;
    }
    if (!this.nextImage) {
      this.calcNext(1);
    }
    const context = (p.canvas as HTMLCanvasElement).getContext('2d');
    context.drawImage(this.nextImage, 0, this.nextImage.height - this.height, this.width, this.height, 0, 0, this.width, this.height);
  }

  cleanup() {
    this.initialized = false;
    this.calcNextKernels = null;
    this.initGridKernel = null;
    this.imageKernel = null;
    this.lastNextCalc = 0;
    this.nextImage = null;
    this.grid.delete();
  }

  private createCalcNextGpuKernel(): TextureKernelFunction {
    const calcNextModule = this.kernels.calcNextKernelModule;
    return this.gpuJs.createKernel(calcNextModule.calcNextKernel,
      {output: [this.width, this.height, 2]})
      .setFloatTextures(true)
      .setFloatOutput(true)
      .setOutputToTexture(true)
      .setConstants({width: this.width, height: this.height})
      .setFunctions(calcNextModule.usedFunctions);
  }

  private createImageKernel() {
    const kernelModule = this.kernels.imageKernelModule;
    return this.gpuJs.createKernel(kernelModule.imageKernel, {output: [this.width, this.height]})
      .setFloatTextures(true)
      .setFunctions(kernelModule.usedFunctions)
      .setGraphical(true);
  }

  updateNumberThreads(numberWebWorkers: number): void {
    // nothing to do here.
  }
}