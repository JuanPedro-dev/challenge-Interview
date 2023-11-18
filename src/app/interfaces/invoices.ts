export interface Invoice {
  id: string;
  global: number;
  parcial: number;
  fees_global: number;
  fees_current: number;
  date_issued: Date;
  rate: number; 
  isPayed: boolean
}

export class Invoice implements Invoice {
  constructor() {}
}
