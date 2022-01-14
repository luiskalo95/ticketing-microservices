import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';
import { errorHandler, NotFoundError, currentUser } from '@luiskalo95-tickets/common';

import { createOrderRouter } from './routes/create-order';
import { getOrdersRouter } from './routes/get-orders';
import { getOrderRouter } from './routes/get-order';
import { deleteOrderRouter } from './routes/delete-order';

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

app.use(createOrderRouter);
app.use(getOrdersRouter);
app.use(getOrderRouter);
app.use(deleteOrderRouter);

app.all('*', async (req, res) => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
