export interface Invoice {
  id: number;
  global: number;
  parcial: number;
  fees_global: number;
  fees_parcial: number;
  date_issued: Date;
  rate: number; 
  isPayed: boolean
}

