import { Client } from '../interfaces/client';

export const userMock: Client = {
  id: 1,
  name: 'Luz Doe Denny',
  password: '1234',
  balance: 5321656,
  cards: [
    {
      id: 1,
      card_number: '****-****-****-1234',
      alias: 'Luz D. Denny',
      key_security: 123,
      balance: 5321656,
      debits: [
        { id: 1, date: new Date(2023, 11, 17), amount: 10000.55 },
        { id: 2, date: new Date(2023, 11, 18), amount: 5000.12 },
        { id: 3, date: new Date(2023, 11, 19), amount: 12000.16 },
        { id: 4, date: new Date(2023, 11, 20), amount: 18000.0 },
        { id: 5, date: new Date(2023, 11, 21), amount: 10000.04 },
        { id: 6, date: new Date(2023, 11, 22), amount: 8000 },
      ],
      credits: [
        { id: 7, date: new Date(2023, 11, 17), amount: 6130.55 },
        { id: 8, date: new Date(2023, 11, 18), amount: 654.12 },
        { id: 9, date: new Date(2023, 11, 19), amount: 1634.16 },
        { id: 10, date: new Date(2023, 11, 20), amount: 98.0 },
        { id: 11, date: new Date(2023, 11, 21), amount: 8000.04 },
        { id: 12, date: new Date(2023, 11, 22), amount: 800 },
      ],
      expiration: new Date(2027, 11, 22),
    },
  ],
  invoices: [
    {
      id: '1',
      global: 400_000,
      parcial: 25_000,
      fees_global: 16,
      fees_current: 2,
      date_issued: new Date(2023, 11, 18),
      rate: 10,
      isPayed: false,
    },
    {
      id: '2',
      global: 300_000,
      parcial: 20_000,
      fees_global: 14,
      fees_current: 3,
      date_issued: new Date(2023, 10, 25),
      rate: 12,
      isPayed: true,
    },
    {
      id: '3',
      global: 500_000,
      parcial: 30_000,
      fees_global: 18,
      fees_current: 1,
      date_issued: new Date(2023, 9, 12),
      rate: 15,
      isPayed: false,
    },
    {
      id: '4',
      global: 600_000,
      parcial: 35_000,
      fees_global: 20,
      fees_current: 4,
      date_issued: new Date(2023, 8, 8),
      rate: 8,
      isPayed: true,
    },
  ]
};


