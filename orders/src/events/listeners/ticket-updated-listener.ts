import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketUpdatedEvent } from '@luiskalo95-tickets/common';
import { Ticket } from '../../models/ticket';

export class TicketUpdatedListener extends Listener<TicketUpdatedEvent> {

    public readonly subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
    public readonly queueGroupName = 'orders-service';

    async onMessage(data: TicketUpdatedEvent['data'], msg: Message): Promise<void> {

        const ticket = await Ticket.findByEvent(data);
        if (!ticket) {
            return console.log(`Ticket not found`)
        }

        const { title, price } = data;
        ticket.set({ title, price });
        await ticket.save();
        msg.ack();
    }
}
