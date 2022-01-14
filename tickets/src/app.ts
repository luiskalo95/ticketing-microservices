import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@luiskalo95-tickets/common';
import { getTicket } from './routes/get-ticket';
import { getTickets } from './routes/get-tickets';
import { createTicket } from './routes/create-ticket';
import { updateTicket } from './routes/update-ticket';

const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    secure: process.env.NODE_ENV !== 'test',
  })
);
app.use(currentUser);
app.use(getTicket);
app.use(getTickets);
app.use(createTicket);
app.use(updateTicket);
app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
