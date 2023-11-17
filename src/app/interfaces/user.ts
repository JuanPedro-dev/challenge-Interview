export interface transaction {
    date: Date;
    amount: number;
}

export interface debit {
    transactions: transaction[];
}

export interface credit {
    transactions: transaction[];
}

export interface Card {
    id: string;
    alias: string;
    key: number;
    balance: number;
    debits: debit[];
    credit: credit[];
    expiration: Date;
}

export interface User {
  id: string;
  name: string;
  password: string;
  balance: number;
  card: Card[]
}

