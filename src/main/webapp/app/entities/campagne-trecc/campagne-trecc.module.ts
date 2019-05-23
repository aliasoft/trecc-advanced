import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Trecc02SharedModule } from 'app/shared';
import {
  CampagneTreccComponent,
  CampagneTreccDetailComponent,
  CampagneTreccUpdateComponent,
  CampagneTreccDeletePopupComponent,
  CampagneTreccDeleteDialogComponent,
  campagneRoute,
  campagnePopupRoute
} from './';

const ENTITY_STATES = [...campagneRoute, ...campagnePopupRoute];

@NgModule({
  imports: [Trecc02SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    CampagneTreccComponent,
    CampagneTreccDetailComponent,
    CampagneTreccUpdateComponent,
    CampagneTreccDeleteDialogComponent,
    CampagneTreccDeletePopupComponent
  ],
  entryComponents: [
    CampagneTreccComponent,
    CampagneTreccUpdateComponent,
    CampagneTreccDeleteDialogComponent,
    CampagneTreccDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02CampagneTreccModule {}
