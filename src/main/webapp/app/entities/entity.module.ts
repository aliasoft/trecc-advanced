import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'campagne-trecc',
        loadChildren: './campagne-trecc/campagne-trecc.module#Trecc02CampagneTreccModule'
      },
      {
        path: 'courrier-trecc',
        loadChildren: './courrier-trecc/courrier-trecc.module#Trecc02CourrierTreccModule'
      },
      {
        path: 'param-notif-trecc',
        loadChildren: './param-notif-trecc/param-notif-trecc.module#Trecc02ParamNotifTreccModule'
      },
      {
        path: 'trace-trecc',
        loadChildren: './trace-trecc/trace-trecc.module#Trecc02TraceTreccModule'
      },
      {
        path: 'type-doc-trecc',
        loadChildren: './type-doc-trecc/type-doc-trecc.module#Trecc02TypeDocTreccModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02EntityModule {}
