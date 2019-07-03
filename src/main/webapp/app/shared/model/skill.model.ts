import { IDipendente } from 'app/shared/model/dipendente.model';

export interface ISkill {
  id?: number;
  descrizione?: string;
  ordineVisualizzazione?: number;
  livello?: number;
  dipendentes?: IDipendente[];
}

export class Skill implements ISkill {
  constructor(
    public id?: number,
    public descrizione?: string,
    public ordineVisualizzazione?: number,
    public livello?: number,
    public dipendentes?: IDipendente[]
  ) {}
}
