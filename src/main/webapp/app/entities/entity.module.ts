import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'dipendente',
        loadChildren: './dipendente/dipendente.module#TestplanDipendenteModule'
      },
      {
        path: 'skill',
        loadChildren: './skill/skill.module#TestplanSkillModule'
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ],
  declarations: [],
  entryComponents: [],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestplanEntityModule {}
