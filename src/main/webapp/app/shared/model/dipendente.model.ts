import { Moment } from 'moment';
import { ISkill } from 'app/shared/model/skill.model';

export interface IDipendente {
  id?: number;
  nome?: string;
  cognome?: string;
  email?: string;
  numeroDiTelefono?: string;
  dataAssunzione?: Moment;
  skills?: ISkill[];
}

export class Dipendente implements IDipendente {
  constructor(
    public id?: number,
    public nome?: string,
    public cognome?: string,
    public email?: string,
    public numeroDiTelefono?: string,
    public dataAssunzione?: Moment,
    public skills?: ISkill[]
  ) {}
}
