import { Invoice } from '../interfaces/invoices';

export const invoiceMock: Invoice[] = [
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
];