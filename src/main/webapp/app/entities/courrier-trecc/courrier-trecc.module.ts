import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Trecc02SharedModule } from 'app/shared';
import {
  CourrierTreccComponent,
  CourrierTreccDetailComponent,
  CourrierTreccUpdateComponent,
  CourrierTreccDeletePopupComponent,
  CourrierTreccDeleteDialogComponent,
  courrierRoute,
  courrierPopupRoute
} from './';

const ENTITY_STATES = [...courrierRoute, ...courrierPopupRoute];

@NgModule({
  imports: [Trecc02SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CourrierTreccComponent,
    CourrierTreccDetailComponent,
    CourrierTreccUpdateComponent,
    CourrierTreccDeleteDialogComponent,
    CourrierTreccDeletePopupComponent
  ],
  entryComponents: [
    CourrierTreccComponent,
    CourrierTreccUpdateComponent,
    CourrierTreccDeleteDialogComponent,
    CourrierTreccDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02CourrierTreccModule {}
