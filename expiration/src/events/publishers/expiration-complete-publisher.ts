import { Subjects, Publisher, ExpirationCompleteEvent, } from '@luiskalo95-tickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {

    public subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
