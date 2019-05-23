import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Trecc02SharedLibsModule, Trecc02SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [Trecc02SharedLibsModule, Trecc02SharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [Trecc02SharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Trecc02SharedModule {
  static forRoot() {
    return {
      ngModule: Trecc02SharedModule
    };
  }
}
