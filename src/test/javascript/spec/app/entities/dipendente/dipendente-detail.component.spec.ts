/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { TestplanTestModule } from '../../../test.module';
import { DipendenteDetailComponent } from 'app/entities/dipendente/dipendente-detail.component';
import { Dipendente } from 'app/shared/model/dipendente.model';

describe('Component Tests', () => {
  describe('Dipendente Management Detail Component', () => {
    let comp: DipendenteDetailComponent;
    let fixture: ComponentFixture<DipendenteDetailComponent>;
    const route = ({ data: of({ dipendente: new Dipendente(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestplanTestModule],
        declarations: [DipendenteDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }]
      })
        .overrideTemplate(DipendenteDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DipendenteDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should call load all on init', () => {
        // GIVEN

        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.dipendente).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
