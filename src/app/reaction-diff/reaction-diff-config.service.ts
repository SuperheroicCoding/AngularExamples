import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Subject} from 'rxjs/Subject';
import {CalcCellWeights} from './cell-weights';
import {Observable} from 'rxjs/Observable';
import {ReactionDiffCalcParams} from './reaction-diff-calc-params';

interface ExampleParamOption {
  name: string;
  value: ReactionDiffCalcParams;
}

@Injectable()
export class ReactionDiffConfigService {


  static addChemicalRadius = 5;

  static defaultParams: ReactionDiffCalcParams = {
    diffRateA: 1.0,
    diffRateB: 0.5,
    feedRate: 0.055,
    killRate: 0.062,
  };

  static mitosisParams: ReactionDiffCalcParams = {
    diffRateA: 1.0,
    diffRateB: 0.5,
    feedRate: 0.0367,
    killRate: 0.0649,
  };
  // coral growth" simulation (f=.0545, k=.062)
  static coralGrowthParams: ReactionDiffCalcParams = {
    diffRateA: 1.0,
    diffRateB: 0.5,
    feedRate: 0.0545,
    killRate: 0.062,
  };

  static defaultWeights = {
    topLeft: 0.05, topCenter: 0.2, topRight: 0.05,
    left: 0.2, center: -1.0, right: 0.2,
    bottomLeft: 0.05, bottomCenter: 0.2, bottomRight: 0.05
  };

  static exampleWeights: Array<ExampleParamOption> = [{
    name: 'Default',
    value: ReactionDiffConfigService.defaultParams
  }, {
    name: 'Coral growth',
    value: ReactionDiffConfigService.coralGrowthParams
  }, {
    name: 'Mitosis',
    value: ReactionDiffConfigService.mitosisParams
  }
  ];


  public calcParams$: Observable<ReactionDiffCalcParams>;
  public calcCellWeights$: Observable<CalcCellWeights>;
  public exampleOptions = ReactionDiffConfigService.exampleWeights.map(option => option.name);
  public selectedExample$: Observable<string>;
  public addChemicalRadius$: Observable<number>;

  private selectedExampleSubject$: Subject<ExampleParamOption> = new BehaviorSubject(ReactionDiffConfigService.exampleWeights[0]);
  private paramsSubject$: Subject<ReactionDiffCalcParams> = new BehaviorSubject(ReactionDiffConfigService.defaultParams);
  private weightsSubject$: Subject<CalcCellWeights> = new BehaviorSubject(ReactionDiffConfigService.defaultWeights);
  private addChemicalRadiusSubject$: Subject<number> = new BehaviorSubject(ReactionDiffConfigService.addChemicalRadius);

  constructor() {
    this.calcParams$ = this.paramsSubject$.asObservable()
      .map((calcParams) => Object.assign({}, calcParams));
    this.calcCellWeights$ = this.weightsSubject$.asObservable()
      .map((calcWeights) => Object.assign({}, calcWeights))
      .map((weights) => this.trimWeights(weights));

    this.addChemicalRadius$ = this.addChemicalRadiusSubject$.asObservable();
    this.selectedExample$ =
      this.selectedExampleSubject$
        .asObservable()
        .do((example) =>
          (example) ? this.updateCalcParams(example.value) : null).map((example) => example ? example.name : null);
  }

  private trimWeights(weights: CalcCellWeights): CalcCellWeights {
    return Object.keys(weights).reduce(
      (result, key: string) =>
        Object.assign(result, {[key]: Math.round(weights[key] * 10000) / 10000}), {}) as CalcCellWeights;
  }

  updateAddChemicalRadius(radius: number) {
    this.addChemicalRadiusSubject$.next(radius);
  }

  updateCalcParams(calcParams: ReactionDiffCalcParams) {
    this.selectedExampleSubject$.next(null);
    this.paramsSubject$.next(calcParams);
  }

  updateCalcCellWeights(weightsParams: CalcCellWeights) {
    this.weightsSubject$.next(weightsParams);
  }

  resetAddChemicalRadius() {
    this.updateAddChemicalRadius(ReactionDiffConfigService.addChemicalRadius);
  }

  resetCalcParams() {
    this.selectedExampleSubject$.next(ReactionDiffConfigService.exampleWeights[0]);
  }

  resetCalcCellWeights() {
    this.updateCalcCellWeights(ReactionDiffConfigService.defaultWeights);
  }

  setSelection(name: string) {
    const foundOption = ReactionDiffConfigService.exampleWeights.find((option) => option.name === name);

    if (foundOption) {
      this.selectedExampleSubject$.next(foundOption);
    }
  }
}
