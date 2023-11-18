import { Invoice } from "./invoices";

export interface transaction {
  id: number;
  date: Date;
  amount: number;
}

export interface Card {
  id: number;
  card_number: string;
  alias: string;
  key_security: number;
  balance: number;
  debits: transaction[];
  credits: transaction[];
  expiration: Date;
}

export class Card implements Card {
  constructor(
    public id: number,
    public card_number: string,
    public alias: string,
    public key_security: number,
    public balance: number,
    public debits: transaction[],
    public credits: transaction[],
    public expiration: Date
  ) {}
}

export interface Client {
  id: number;
  name: string;
  password: string;
  balance: number;
  cards: Card[];
  invoices: Invoice[]
}

export class Client implements Client {
  constructor(
    public id: number,
    public name: string,
    public password: string,
    public balance: number,
    public cards: Card[],
    public invoices: Invoice[],
  ) {
    this.id = id;
    this.name = name;
    this.password = password;
    this.balance = balance;
    this.cards = cards;
    this.invoices = invoices;
  }
}
