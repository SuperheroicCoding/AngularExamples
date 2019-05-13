import {InjectionToken} from '@angular/core';

export interface ScThanosOptions {
  animationLength: number;
  maxParticleCount: number;
}

export function createScThanosConfig(options?: Partial<ScThanosOptions>): ScThanosOptions {
  return {
    animationLength: 5000,
    maxParticleCount: 400000,
    ...options
  };
}

export const SC_THANOS_OPTIONS_TOKEN = new InjectionToken<ScThanosOptions>('thanosOptions', {
  providedIn: 'root',
  factory: createScThanosConfig
});
