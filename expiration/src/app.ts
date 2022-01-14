import express from 'express';
import 'express-async-errors';
import { errorHandler, NotFoundError } from '@luiskalo95-tickets/common';
import { serverAdapter } from './queues/expiration-queue';

const app = express();

app.use('/admin/queues', serverAdapter.getRouter());
app.all('*', async (req, res) => {
  throw new NotFoundError();
});
app.use(errorHandler);

export { app };
