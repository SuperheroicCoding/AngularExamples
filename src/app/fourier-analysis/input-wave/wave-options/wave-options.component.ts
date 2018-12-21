import {Component, OnDestroy} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersistNgFormPlugin} from '@datorama/akita';
import {Observable} from 'rxjs';
import {InputWaveOptionsQuery} from '../../state/input-wave-options.query';
import {InputWaveOptionsState} from '../../state/input-wave-options.store';

@Component({
  selector: 'app-wave-options',
  templateUrl: './wave-options.component.html',
  styleUrls: ['./wave-options.component.scss']
})
export class WaveOptionsComponent implements OnDestroy {
  private persistForm: PersistNgFormPlugin;
  private waveOptions$: Observable<InputWaveOptionsState>;
  private form: FormGroup;

  constructor(private fb: FormBuilder, private inputWaveOptionsQuery: InputWaveOptionsQuery) {
    this.waveOptions$ = this.inputWaveOptionsQuery.select();
    this.initFormValues();
  }

  get frequencies() {
    if (this.form) {
      return (this.form.get('frequencies') as FormArray);
    }
  }

  initFormValues(): void {
    this.form = this.fb.group({
      frequencies: this.fb.array([]),
      lengthInMs: this.fb.control(null,
        [Validators.min(10)]),
      samples: this.fb.control(
        null,
        [Validators.min(100)]),
    });
    this.persistForm = new PersistNgFormPlugin(
      this.inputWaveOptionsQuery).setForm(this.form, this.fb);
  }

  ngOnDestroy(): void {
    if (this.persistForm != null) {
      this.persistForm.destroy();
    }
  }

  addFrequency() {
    this.frequencies.push(this.fb.control(10));
  }

  removeFrequency(i: number) {
    if (this.frequencies.length > 1) {
      this.frequencies.removeAt(i);
    }
  }
}
