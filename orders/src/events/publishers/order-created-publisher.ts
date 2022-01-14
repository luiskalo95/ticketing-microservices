import { Publisher, OrderCreatedEvent, Subjects } from '@luiskalo95-tickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {

    public readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
}