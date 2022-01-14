import { OrderCancelledEvent, Publisher, Subjects } from "@luiskalo95-tickets/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent>{
    
    public readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}