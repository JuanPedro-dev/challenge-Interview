import { Transaction } from "../interfaces/transaction";

export const transaccionesMock: Transaction[] = [
    new Transaction('Claro', 2900.0, new Date(2023, 11, 1), 'pendiente', 'debito'),
    new Transaction('Pago de internet', 6000.0, new Date(2023, 11, 1), 'completado', 'debito'),
    new Transaction('Salario', 2000.0, new Date(2023, 11, 1), 'completado', 'credito'),
    new Transaction('Retiro en caja', 20.0, new Date(2023, 11, 1), 'pendiente', 'debito'),
    new Transaction('Préstamo amigo', 30.0, new Date(2023, 11, 1), 'rechazado', 'credito'),
];
