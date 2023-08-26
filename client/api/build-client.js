import axios from 'axios';

const buildClient = ({ req }) => {
    
    if (typeof window === 'undefined') {
        // We are on the server
        return axios.create({
            //TODO: Se setea la de forma local y la de producción
            //baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            baseURL: 'http://www.luiskalo95.lat/',
            headers: req.headers,
        });
    } else {
        // We must be on the browser
        return axios.create({
            baseUrl: '/',
        });
    }
};

export default buildClient;

