import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TestplanSharedModule } from 'app/shared';
import {
  DipendenteComponent,
  DipendenteDetailComponent,
  DipendenteUpdateComponent,
  DipendenteDeletePopupComponent,
  DipendenteDeleteDialogComponent,
  dipendenteRoute,
  dipendentePopupRoute
} from './';




const ENTITY_STATES = [...dipendenteRoute, ...dipendentePopupRoute];

@NgModule({
  imports: [TestplanSharedModule, RouterModule.forChild(ENTITY_STATES)],
  declarations: [
    DipendenteComponent,
    DipendenteDetailComponent,
    DipendenteUpdateComponent,
    DipendenteDeleteDialogComponent,
    DipendenteDeletePopupComponent,
  ],
  entryComponents: [DipendenteComponent, DipendenteUpdateComponent, DipendenteDeleteDialogComponent, DipendenteDeletePopupComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestplanDipendenteModule {}
