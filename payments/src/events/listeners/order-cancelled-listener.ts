import { OrderCancelledEvent, Subjects, Listener, OrderStatus, } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {

    public subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    public queueGroupName = 'payments-service';

    public async onMessage(data: OrderCancelledEvent['data'], msg: Message): Promise<void> {
        const order = await Order.findOne({
            _id: data.id,
            version: data.version - 1,
        });

        if (!order) {
            return console.log(`Order not found`);
        }
        order.set({ status: OrderStatus.Cancelled });
        await order.save();
        msg.ack();
    }
}
