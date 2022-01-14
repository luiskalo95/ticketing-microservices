import { Message } from 'node-nats-streaming';
import { Subjects, Listener, TicketCreatedEvent } from '@luiskalo95-tickets/common';
import { Ticket } from '../../models/ticket';

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {

  public readonly subject: Subjects.TicketCreated = Subjects.TicketCreated;
  public readonly queueGroupName = 'orders-service';

  public async onMessage(data: TicketCreatedEvent['data'], msg: Message): Promise<void> {
    const { id, title, price } = data;

    const ticket = Ticket.build({
      id,
      title,
      price,
    });
    await ticket.save();
    msg.ack();
  }
}
