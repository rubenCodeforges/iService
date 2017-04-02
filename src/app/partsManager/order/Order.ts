export class Order {
    id: string;
    title: string;
    status: OrderStatus;
}

export enum OrderStatus{
    NEW,
    PAYED,
    PROCESSED,
    SEND,
    CLOSED
}