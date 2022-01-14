import { Message } from 'node-nats-streaming';
import { Listener, OrderCreatedEvent, Subjects } from '@luiskalo95-tickets/common';
import { Order } from '../../models/order';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {

    public subject: Subjects.OrderCreated = Subjects.OrderCreated;
    public queueGroupName = 'payments-service';

    public async onMessage(data: OrderCreatedEvent['data'], msg: Message): Promise<void> {
        const order = Order.build({
            id: data.id,
            price: data.ticket.price,
            status: data.status,
            userId: data.userId,
            version: data.version,
        });
        await order.save();
        msg.ack();
    }
}