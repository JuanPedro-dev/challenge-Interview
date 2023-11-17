interface transaction {
    date: Date;
    amount: number;
}

interface debit {
    transactions: transaction[];
}


interface credit {
    transactions: transaction[];
}

export interface Card {
    id: string;
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
}

