import { Listener, OrderCancelledEvent, Subjects } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {

    public readonly subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
    public readonly queueGroupName = 'tickets-service';

    public async onMessage(data: OrderCancelledEvent['data'], message: Message): Promise<void> {
        const ticket = await Ticket.findById(data.ticket.id);
        if (!ticket) {
            return console.log(`Ticket not found`)
        }
        ticket.set({ orderId: undefined });
        await ticket.save();
        await new TicketUpdatedPublisher(this.client).publish({
            id: ticket.id,
            version: ticket.version,
            title: ticket.title,
            price: ticket.price,
            userId: ticket.userId,
            orderId: ticket.orderId!
        });
        message.ack();
    }
}