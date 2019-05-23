import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Trecc02SharedModule } from 'app/shared';
import {
  TraceTreccComponent,
  TraceTreccDetailComponent,
  TraceTreccUpdateComponent,
  TraceTreccDeletePopupComponent,
  TraceTreccDeleteDialogComponent,
  traceRoute,
  tracePopupRoute
} from './';

const ENTITY_STATES = [...traceRoute, ...tracePopupRoute];

@NgModule({
  imports: [Trecc02SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    TraceTreccComponent,
    TraceTreccDetailComponent,
    TraceTreccUpdateComponent,
    TraceTreccDeleteDialogComponent,
    TraceTreccDeletePopupComponent
  ],
  entryComponents: [TraceTreccComponent, TraceTreccUpdateComponent, TraceTreccDeleteDialogComponent, TraceTreccDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02TraceTreccModule {}
