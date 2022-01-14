import nats, { Stan } from 'node-nats-streaming';

class NatsWrapper {

    private _client?: Stan;

    get client() {
        if (!this._client) {
            throw new Error('Cannot access NATS client before connecting');
        }
        return this._client;
    }

    public connect(clusterId: string, clientId: string, url: string): Promise<void> {
        this._client = nats.connect(clusterId, clientId, { url });
        return new Promise<void>((resolve, reject) => {
            this.client.on('connect', () => {
                console.log('Connected to NATS'),
                    resolve();
            });
            this.client.on('error', (error) => {
                console.log('Error connecting to NATS'),
                    reject(error);
            });
        });
    }
}

export const natsWrapper = new NatsWrapper();