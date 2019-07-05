import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NbThemeModule, NbLayoutModule } from '@nebular/theme';

import { TestplanSharedModule } from 'app/shared';
import {
NavbarComponent,
navbarRoute,
} from 'C:/Users/LORYMAX/App2-master/src/main/webapp/app/layouts/navbar/index';

@NgModule({
  imports: [ NbLayoutModule],
  declarations: [

  ],
  entryComponents: [NavbarComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestplanDipendenteModule {}
