import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestplanSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestplanSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestplanSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestplanSharedModule {
  static forRoot() {
    return {
      ngModule: TestplanSharedModule
    };
  }
}
