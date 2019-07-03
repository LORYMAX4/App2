/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { FormBuilder } from '@angular/forms';
import { Observable, of } from 'rxjs';

import { TestplanTestModule } from '../../../test.module';
import { DipendenteUpdateComponent } from 'app/entities/dipendente/dipendente-update.component';
import { DipendenteService } from 'app/entities/dipendente/dipendente.service';
import { Dipendente } from 'app/shared/model/dipendente.model';

describe('Component Tests', () => {
  describe('Dipendente Management Update Component', () => {
    let comp: DipendenteUpdateComponent;
    let fixture: ComponentFixture<DipendenteUpdateComponent>;
    let service: DipendenteService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestplanTestModule],
        declarations: [DipendenteUpdateComponent],
        providers: [FormBuilder]
      })
        .overrideTemplate(DipendenteUpdateComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(DipendenteUpdateComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DipendenteService);
    });

    describe('save', () => {
      it('Should call update service on save for existing entity', fakeAsync(() => {
        // GIVEN
        const entity = new Dipendente(123);
        spyOn(service, 'update').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.update).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));

      it('Should call create service on save for new entity', fakeAsync(() => {
        // GIVEN
        const entity = new Dipendente();
        spyOn(service, 'create').and.returnValue(of(new HttpResponse({ body: entity })));
        comp.updateForm(entity);
        // WHEN
        comp.save();
        tick(); // simulate async

        // THEN
        expect(service.create).toHaveBeenCalledWith(entity);
        expect(comp.isSaving).toEqual(false);
      }));
    });
  });
});
