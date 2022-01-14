import { Subjects, Publisher, PaymentCreatedEvent } from '@luiskalo95-tickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {

  public subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
