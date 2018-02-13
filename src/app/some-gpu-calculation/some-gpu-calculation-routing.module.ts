import {ModuleWithProviders} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SomeGpuCalculationComponent} from './some-gpu-calculation.component';

const routes: Routes = [
  {path: '', component: SomeGpuCalculationComponent},
];

export const someGpuCalculationRoutes: ModuleWithProviders = RouterModule.forChild(routes);

