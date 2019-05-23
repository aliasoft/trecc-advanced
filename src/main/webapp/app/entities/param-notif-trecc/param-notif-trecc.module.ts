import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Trecc02SharedModule } from 'app/shared';
import {
  ParamNotifTreccComponent,
  ParamNotifTreccDetailComponent,
  ParamNotifTreccUpdateComponent,
  ParamNotifTreccDeletePopupComponent,
  ParamNotifTreccDeleteDialogComponent,
  paramNotifRoute,
  paramNotifPopupRoute
} from './';

const ENTITY_STATES = [...paramNotifRoute, ...paramNotifPopupRoute];

@NgModule({
  imports: [Trecc02SharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    ParamNotifTreccComponent,
    ParamNotifTreccDetailComponent,
    ParamNotifTreccUpdateComponent,
    ParamNotifTreccDeleteDialogComponent,
    ParamNotifTreccDeletePopupComponent
  ],
  entryComponents: [
    ParamNotifTreccComponent,
    ParamNotifTreccUpdateComponent,
    ParamNotifTreccDeleteDialogComponent,
    ParamNotifTreccDeletePopupComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02ParamNotifTreccModule {}
