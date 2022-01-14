import { Subjects, Listener, PaymentCreatedEvent, OrderStatus, } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { Order } from '../../models/order';

export class PaymentCreatedListener extends Listener<PaymentCreatedEvent> {

    public subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
    public queueGroupName = 'orders-service';

    public async onMessage(data: PaymentCreatedEvent['data'], msg: Message): Promise<void> {

        const order = await Order.findById(data.orderId);
        if (!order) {
            return console.log(`Order not found`);
        }
        order.set({ status: OrderStatus.Complete });
        await order.save();
        msg.ack();
    }
}
