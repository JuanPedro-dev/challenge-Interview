export interface transaction {
    date: Date;
    amount: number;
}

export interface Card {
    id: string;
    alias: string;
    key: number;
    balance: number;
    debits: transaction[];
    credits: transaction[];
    expiration: Date;
}

export interface User {
  id: string;
  name: string;
  password: string;
  balance: number;
  card: Card[]
}


export class User implements User {
    constructor(
        public id: string,
        public name: string,
        public password: string,
        public balance: number,
        public card: Card[]
    ) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.balance = balance;
        this.card = card;
    }
}

export class Card implements Card {
    constructor(
        public id: string,
        public alias: string,
        public key: number,
        public balance: number,
        public debits: transaction[],
        public credits: transaction[],
        public expiration: Date
    ) {}
}