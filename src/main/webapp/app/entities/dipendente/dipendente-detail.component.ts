import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IDipendente } from 'app/shared/model/dipendente.model';

@Component({
  selector: 'jhi-dipendente-detail',
  templateUrl: './dipendente-detail.component.html'
})
export class DipendenteDetailComponent implements OnInit {
  dipendente: IDipendente;

  constructor(protected activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(({ dipendente }) => {
      this.dipendente = dipendente;
    });
  }

  previousState() {
    window.history.back();
  }
}
