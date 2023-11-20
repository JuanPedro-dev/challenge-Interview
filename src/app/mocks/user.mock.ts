import { Client } from '../interfaces/client';

export const userMock: Client = {
  id: 0,
  balance: 0,
  name: "Luz Doe Denny",
  password: "1234",
  cards: [
    {
      id: 1,
      card_number: "****-****-****-1234",
      alias: "Luz D. Denny",
      key_security: 123,
      balance: 5321656.0,
      expiration: new Date(2027, 11, 22),
    },
  ],
  invoices: [
    {
      id: 1,
      global: 400000.0,
      parcial: 25000.0,
      fees_global: 16,
      fees_parcial: 0,
      date_issued: new Date(2023, 11, 18),
      rate: 10.0,
      isPayed: false,
    },
    {
      id: 2,
      global: 300000.0,
      parcial: 20000.0,
      fees_global: 14,
      fees_parcial: 0,
      date_issued: new Date(2023, 10, 25),
      rate: 12.0,
      isPayed: true,
    },
    {
      id: 3,
      global: 500000.0,
      parcial: 30000.0,
      fees_global: 18,
      fees_parcial: 0,
      date_issued: new Date(2023, 9, 12),
      rate: 15.0,
      isPayed: false,
    },
    {
      id: 4,
      global: 600000.0,
      parcial: 35000.0,
      fees_global: 20,
      fees_parcial: 0,
      date_issued: new Date(2023, 8, 8),
      rate: 8.0,
      isPayed: true,
    },
  ],
  transactions: [
    {
      id: 1,
      description: "Claro",
      date: new Date(2023, 11, 17),
      amount: 10000.55,
      state: "COMPLETADO",
      type: "CREDITO",
    },
    {
      id: 2,
      description: "Pago de internet",
      date: new Date(2023, 11, 18),
      amount: 5000.12,
      state: "RECHAZADO",
      type: "DEBITO",
    },
    {
      id: 3,
      description: "Salario",
      date: new Date(2023, 11, 19),
      amount: 12000.16,
      state: "PENDIENTE",
      type: "DEBITO",
    },
    {
      id: 4,
      description: "Retiro en caja",
      date: new Date(2023, 11, 20),
      amount: 15000.0,
      state: "COMPLETADO",
      type: "CREDITO",
    },
    {
      id: 5,
      description: "Préstamo amigo",
      date: new Date(2023, 11, 21),
      amount: 10000.04,
      state: "RECHAZADO",
      type: "CREDITO",
    },
    {
      id: 6,
      description: "",
      date: new Date(2023, 11, 22),
      amount: 8000.0,
      state: "PENDIENTE",
      type: "DEBITO",
    },
    {
      id: 7,
      description: "",
      date: new Date(2023, 11, 17),
      amount: 6130.55,
      state: "COMPLETADO",
      type: "CREDITO",
    },
    {
      id: 8,
      description: "",
      date: new Date(2023, 11, 18),
      amount: 654.12,
      state: "RECHAZADO",
      type: "CREDITO",
    },
    {
      id: 9,
      description: "",
      date: new Date(2023, 11, 19),
      amount: 1634.16,
      state: "PENDIENTE",
      type: "CREDITO",
    },
    {
      id: 10,
      description: "",
      date: new Date(2023, 11, 20),
      amount: 98.0,
      state: "COMPLETADO",
      type: "DEBITO",
    },
    {
      id: 11,
      description: "",
      date: new Date(2023, 11, 21),
      amount: 8000.04,
      state: "RECHAZADO",
      type: "DEBITO",
    },
    {
      id: 12,
      description: "",
      date: new Date(2023, 11, 22),
      amount: 8000.0,
      state: "PENDIENTE",
      type: "CREDITO",
    },
  ],
};
