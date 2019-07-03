import { NgModule } from '@angular/core';

import { TestplanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestplanSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestplanSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestplanSharedCommonModule {}
