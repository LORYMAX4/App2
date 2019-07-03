/* tslint:disable max-line-length */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { TestplanTestModule } from '../../../test.module';
import { DipendenteComponent } from 'app/entities/dipendente/dipendente.component';
import { DipendenteService } from 'app/entities/dipendente/dipendente.service';
import { Dipendente } from 'app/shared/model/dipendente.model';

describe('Component Tests', () => {
  describe('Dipendente Management Component', () => {
    let comp: DipendenteComponent;
    let fixture: ComponentFixture<DipendenteComponent>;
    let service: DipendenteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestplanTestModule],
        declarations: [DipendenteComponent],
        providers: []
      })
        .overrideTemplate(DipendenteComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DipendenteComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DipendenteService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new Dipendente(123)],
            headers
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.dipendentes[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
