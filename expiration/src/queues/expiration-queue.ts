import Queue from 'bull';
import { ExpirationCompletePublisher } from '../events/publishers/expiration-complete-publisher';
import { natsWrapper } from '../nats-wrapper';
import { createBullBoard } from '@bull-board/api';
import { BullAdapter } from '@bull-board/api/bullAdapter';
import { ExpressAdapter } from '@bull-board/express';

interface Payload {
    orderId: string;
}

const expirationQueue = new Queue<Payload>('order:expiration', {
    redis: {
        host: process.env.REDIS_HOST,
    },
});

const serverAdapter = new ExpressAdapter();

createBullBoard({
    queues: [
        new BullAdapter(expirationQueue)
    ],
    serverAdapter
})

expirationQueue.process(async (job) => {
    console.log('Job executed')
    new ExpirationCompletePublisher(natsWrapper.client).publish({
        orderId: job.data.orderId,
    });
});

serverAdapter.setBasePath('/admin/queues')

export { expirationQueue, serverAdapter };
