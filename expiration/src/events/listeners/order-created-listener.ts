import { Listener, OrderCreatedEvent, Subjects } from '@luiskalo95-tickets/common';
import { Message } from 'node-nats-streaming';
import { expirationQueue } from '../../queues/expiration-queue';

export class OrderCreatedListener extends Listener<OrderCreatedEvent> {

    public subject: Subjects.OrderCreated = Subjects.OrderCreated;
    public queueGroupName = 'expiration-service';

    public async onMessage(data: OrderCreatedEvent['data'], msg: Message): Promise<void> {
        try{
            const delay = new Date(data.expiresAt).getTime() - new Date().getTime();
            console.log('Waiting this many milliseconds to process the job:', delay);
            await expirationQueue.add({ orderId: data.id }, { delay });
            msg.ack();
        }catch(e){
            console.log(e)
        }
    }
}


