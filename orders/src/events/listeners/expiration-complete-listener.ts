import { Listener, Subjects, ExpirationCompleteEvent, OrderStatus } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';
import { OrderCancelledPublisher } from '../publishers/order-cancelled-publisher';

export class ExpirationCompleteListener extends Listener<ExpirationCompleteEvent> {

    public queueGroupName = 'orders-service';
    public subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;

    public async onMessage(data: ExpirationCompleteEvent['data'], msg: Message): Promise<void> {

        const order = await Order.findById(data.orderId).populate('ticket');
        if (!order) {
            return console.log(`Order not found`);
        }
        if (order.status === OrderStatus.Complete) {
            return msg.ack();
        }

        order.set({ status: OrderStatus.Cancelled});
        await order.save();
        await new OrderCancelledPublisher(this.client).publish({
            id: order.id,
            version: order.version,
            ticket: {
                id: order.ticket.id,
            },
        });
        msg.ack();
    }
}
