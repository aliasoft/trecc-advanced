import { NgModule } from '@angular/core';

import { Trecc02SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [Trecc02SharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [Trecc02SharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Trecc02SharedCommonModule {}
