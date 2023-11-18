export interface Transaction {
    nombre: string;
    monto: number;
    fecha: Date;
    estado: 'completado' | 'rechazado' | 'pendiente';
    tipo: 'debito' | 'credito';
}

export class Transaction implements Transaction {
    constructor(
        nombre: string,
        monto: number,
        fecha: Date,
        estado: 'completado' | 'rechazado' | 'pendiente',
        tipo: 'debito' | 'credito'
    ) {
        this.nombre = nombre;
        this.monto = monto;
        this.fecha = fecha;
        this.estado = estado;
        this.tipo = tipo;
    }
}