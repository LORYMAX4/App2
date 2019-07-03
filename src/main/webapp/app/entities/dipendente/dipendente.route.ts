import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Dipendente } from 'app/shared/model/dipendente.model';
import { DipendenteService } from './dipendente.service';
import { DipendenteComponent } from './dipendente.component';
import { DipendenteDetailComponent } from './dipendente-detail.component';
import { DipendenteUpdateComponent } from './dipendente-update.component';
import { DipendenteDeletePopupComponent } from './dipendente-delete-dialog.component';
import { IDipendente } from 'app/shared/model/dipendente.model';

@Injectable({ providedIn: 'root' })
export class DipendenteResolve implements Resolve<IDipendente> {
  constructor(private service: DipendenteService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDipendente> {
    const id = route.params['id'] ? route.params['id'] : null;
    if (id) {
      return this.service.find(id).pipe(
        filter((response: HttpResponse<Dipendente>) => response.ok),
        map((dipendente: HttpResponse<Dipendente>) => dipendente.body)
      );
    }
    return of(new Dipendente());
  }
}

export const dipendenteRoute: Routes = [
  {
    path: '',
    component: DipendenteComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Dipendente - Testplan'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: DipendenteDetailComponent,
    resolve: {
      dipendente: DipendenteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Dipendente - Testplan'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: DipendenteUpdateComponent,
    resolve: {
      dipendente: DipendenteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Dipendente - Testplan'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: DipendenteUpdateComponent,
    resolve: {
      dipendente: DipendenteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Dipendente - Testplan'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const dipendentePopupRoute: Routes = [
  {
    path: ':id/delete',
    component: DipendenteDeletePopupComponent,
    resolve: {
      dipendente: DipendenteResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'Dipendente - Testplan'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
