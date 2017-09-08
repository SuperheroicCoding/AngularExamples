import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';
import {CalcCellWeights} from '../cell-weights';

@Component({
  selector: 'app-weights-config',
  templateUrl: './weights-config.component.html',
  styleUrls: ['./weights-config.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeightsConfigComponent implements OnChanges {
  @Input() weights: CalcCellWeights;
  @Output() onWeightsChanged: EventEmitter<CalcCellWeights> = new EventEmitter<CalcCellWeights>();

  private sumOfWeights;

  constructor() {
  }

  ngOnChanges(simpleChanges) {
    if (simpleChanges.weights) {
      this.sumOfWeights = this.sumWeights();
    }
  }

  onWeightChanged() {
    this.sumOfWeights = this.sumWeights();
    if (this.sumOfWeights === 0) {
      this.onWeightsChanged.emit(this.weights);
    }
  }

  private sumWeights(): number {
    const sum = Object.keys(this.weights)
      .reduce((reduceSum: number, weight: string) =>
        reduceSum + this.weights[weight], 0.0);
    return Math.floor(sum * 1000) / 1000;
  }
}
