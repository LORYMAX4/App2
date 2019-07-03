import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Subscription, from } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { JhiEventManager, JhiAlertService } from 'ng-jhipster';

import { IDipendente } from 'app/shared/model/dipendente.model';
import { AccountService } from 'app/core';
import { DipendenteService } from './dipendente.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { DipendenteResolve} from './dipendente.route';

@Component({
  selector: 'jhi-dipendente',
  templateUrl: './dipendente.component.html'
})
export class DipendenteComponent implements OnInit, OnDestroy {
  dipendentes: IDipendente[];
  nDipendenti: number;
  currentAccount: any;
  eventSubscriber: Subscription;

  constructor(
    protected dipendenteService: DipendenteService,    
    protected jhiAlertService: JhiAlertService,
    protected eventManager: JhiEventManager,
    protected accountService: AccountService
  ) {}

  loadAll() {
    this.dipendenteService
      .query()
      .pipe(
        filter((res: HttpResponse<IDipendente[]>) => res.ok),
        map((res: HttpResponse<IDipendente[]>) => res.body)
      )
      .subscribe(
        (res: IDipendente[]) => {
          this.dipendentes = res;
        },
        (res: HttpErrorResponse) => this.onError(res.message)
      );
      this.conta();
  }

  ngOnInit() {
    this.loadAll();
    this.accountService.identity().then(account => {
      this.currentAccount = account;
    });
    this.registerChangeInDipendentes();
  }
  conta() {
    this.dipendenteService.conta().subscribe(
        (res: HttpResponse<number>) => {
            this.nDipendenti = res.body;
        },
        (res: HttpErrorResponse) => console.log(res.message)
    );
}
  ngOnDestroy() {
    this.eventManager.destroy(this.eventSubscriber);
  }

  trackId(index: number, item: IDipendente) {
    return item.id;
  }

  registerChangeInDipendentes() {
    this.eventSubscriber = this.eventManager.subscribe('dipendenteListModification', response => this.loadAll());
  }

  protected onError(errorMessage: string) {
    this.jhiAlertService.error(errorMessage, null, null);
  }
}
export class NgbdRatingBasic {
  currentRate = 8;
}
