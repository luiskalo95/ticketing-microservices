import { Publisher, Subjects, TicketCreatedEvent } from '@luiskalo95-tickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {

    public readonly subject = Subjects.TicketCreated;
}