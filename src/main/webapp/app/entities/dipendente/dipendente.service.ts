import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IDipendente } from 'app/shared/model/dipendente.model';

type EntityResponseType = HttpResponse<IDipendente>;
type EntityArrayResponseType = HttpResponse<IDipendente[]>;
type EntityNumberResponseType = HttpResponse<number>;

@Injectable({ providedIn: 'root' })
export class DipendenteService {
  public resourceUrl = SERVER_API_URL + 'api/dipendentes';

  constructor(protected http: HttpClient) {}

  create(dipendente: IDipendente): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dipendente);
    return this.http
      .post<IDipendente>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  conta(): Observable< EntityNumberResponseType> {
    return this.http.get<number>(`${this.resourceUrl}/count`, { observe: 'response' })
}

  update(dipendente: IDipendente): Observable<EntityResponseType> {
    const copy = this.convertDateFromClient(dipendente);
    return this.http
      .put<IDipendente>(this.resourceUrl, copy, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<IDipendente>(`${this.resourceUrl}/${id}`, { observe: 'response' })
      .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
  }

  query(req?: any): Observable<EntityArrayResponseType> {
    const options = createRequestOption(req);
    return this.http
      .get<IDipendente[]>(this.resourceUrl, { params: options, observe: 'response' })
      .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
  }

  delete(id: number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
  }

  protected convertDateFromClient(dipendente: IDipendente): IDipendente {
    const copy: IDipendente = Object.assign({}, dipendente, {
      dataAssunzione: dipendente.dataAssunzione != null && dipendente.dataAssunzione.isValid() ? dipendente.dataAssunzione.toJSON() : null
    });
    return copy;
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.dataAssunzione = res.body.dataAssunzione != null ? moment(res.body.dataAssunzione) : null;
    }
    return res;
  }

  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((dipendente: IDipendente) => {
        dipendente.dataAssunzione = dipendente.dataAssunzione != null ? moment(dipendente.dataAssunzione) : null;
      });
    }
    return res;
  }
}
