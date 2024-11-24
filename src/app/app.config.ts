import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withViewTransitions({
        skipInitialTransition: true, // Para que no anime la primera vista
        onViewTransitionCreated(trasitionInfo) {
          console.log({ trasitionInfo });
        }
      }),
    ),
    importProvidersFrom(
      HttpClientModule,
    )
  ]
};

