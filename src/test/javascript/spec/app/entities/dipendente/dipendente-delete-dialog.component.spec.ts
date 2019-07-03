/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, inject, fakeAsync, tick } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable, of } from 'rxjs';
import { JhiEventManager } from 'ng-jhipster';

import { TestplanTestModule } from '../../../test.module';
import { DipendenteDeleteDialogComponent } from 'app/entities/dipendente/dipendente-delete-dialog.component';
import { DipendenteService } from 'app/entities/dipendente/dipendente.service';

describe('Component Tests', () => {
  describe('Dipendente Management Delete Component', () => {
    let comp: DipendenteDeleteDialogComponent;
    let fixture: ComponentFixture<DipendenteDeleteDialogComponent>;
    let service: DipendenteService;
    let mockEventManager: any;
    let mockActiveModal: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [TestplanTestModule],
        declarations: [DipendenteDeleteDialogComponent]
      })
        .overrideTemplate(DipendenteDeleteDialogComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(DipendenteDeleteDialogComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(DipendenteService);
      mockEventManager = fixture.debugElement.injector.get(JhiEventManager);
      mockActiveModal = fixture.debugElement.injector.get(NgbActiveModal);
    });

    describe('confirmDelete', () => {
      it('Should call delete service on confirmDelete', inject(
        [],
        fakeAsync(() => {
          // GIVEN
          spyOn(service, 'delete').and.returnValue(of({}));

          // WHEN
          comp.confirmDelete(123);
          tick();

          // THEN
          expect(service.delete).toHaveBeenCalledWith(123);
          expect(mockActiveModal.dismissSpy).toHaveBeenCalled();
          expect(mockEventManager.broadcastSpy).toHaveBeenCalled();
        })
      ));
    });
  });
});
