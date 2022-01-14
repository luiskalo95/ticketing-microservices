import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import request from 'supertest';
import { app } from '../app';

declare global {
    var signInAuth: () => Promise<string[]>;
}

let mongo: any;

/* Creo una nueva base de datos */
beforeAll(async () => {
    process.env.JWT_KEY = 'asdfasdf';
    process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
    mongo = new MongoMemoryServer();
    const mongoUri = await mongo.getUri();
    await mongoose.connect(mongoUri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
});

/* Borro todas las colecciones creadas previamente*/
beforeEach(async () => {
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections) {
        await collection.deleteMany({});
    }
});

/* Cerrar la base de datos */
afterAll(async () => {
    await mongo.stop();
    await mongoose.connection.close();
});

global.signInAuth = async () => {
    const email = 'test@test.com';
    const password = 'password';
    const response = await request(app).post('/api/users/signup').send({email,password}).expect(201);
    const cookie = response.get('Set-Cookie');
    return cookie;
};

