import { Listener, OrderCreatedEvent, Subjects } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { natsWrapper } from '../../nats-wrapper';
import { expirationQueue } from '../../queues/expiration-queue';
import { ExpirationCompletePublisher } from '../publishers/expiration-complete-publisher';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {

    public subject: Subjects.OrderCreated = Subjects.OrderCreated;
    public queueGroupName = 'expiration-service';

    public async onMessage(data: OrderCreatedEvent['data'], msg: Message): Promise<void> {
            const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
            console.log('Waiting this many milliseconds to process the job:', delay);
            await expirationQueue.add({ orderId: data.id }, { delay });
            /* setTimeout(() => {
                console.log('Job executed')
                new ExpirationCompletePublisher(natsWrapper.client).publish({
                    orderId: data.id,
                })
            }, delay); */
            msg.ack();
    }
}


