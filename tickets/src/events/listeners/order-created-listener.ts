import { Listener, OrderCreatedEvent, Subjects } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { Ticket } from '../../models/ticket';
import { TicketUpdatedPublisher } from '../publishers/ticket-updated-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {

    public readonly subject: Subjects.OrderCreated = Subjects.OrderCreated;
    public readonly queueGroupName = 'tickets-service';

    public async onMessage(data: OrderCreatedEvent['data'], message: Message): Promise<void> {
        const ticket = await Ticket.findById(data.ticket.id);
        if (!ticket) {
            return console.log(`Ticket not found`)
        }
        ticket.set({ orderId: data.id });
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