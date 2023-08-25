import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { requireAuth, validateRequest,DatabaseConnectionError } from '@luiskalo95-tickets/common';
import { Ticket } from '../models/ticket';
import { natsWrapper } from '../nats-wrapper';
import { TicketCreatedPublisher } from '../events/publishers/ticket-created-publisher';
import db from 'mongoose';

const router = express.Router();

router.post('/api/tickets', [requireAuth ,
    body('title').not().isEmpty().withMessage('Title is required'),
    body('price').isFloat({ gt: 0 }).withMessage('Price must be greater than 0'),
    validateRequest], async (req: Request, res: Response) => {
        const { title, price } = req.body;
        const ticket = Ticket.build({ title, price, userId: req.currentUser!.id });
        // HANDLE MONGODB TRANSACTIONS
        const SESSION = await db.startSession()
        try{
            SESSION.startTransaction();
            await ticket.save();
            await new TicketCreatedPublisher(natsWrapper.client).publish({
                id: ticket.id,
                title: ticket.title,
                price: ticket.price,
                userId: ticket.userId,
                version: ticket.version
            });
            await SESSION.commitTransaction();
            return res.status(201).send(ticket);
        }catch(error){
            await SESSION.abortTransaction();
            throw new DatabaseConnectionError();
        }
        finally {
            SESSION.endSession();
          }
    }
);

export { router as createTicket };
