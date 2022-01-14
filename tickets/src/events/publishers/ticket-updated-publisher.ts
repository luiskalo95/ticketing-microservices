import { Publisher, Subjects, TicketUpdatedEvent } from '@luiskalo95-tickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {

  public readonly subject = Subjects.TicketUpdated;
}