require('dotenv').config();

const config = {
    mongo: {
        options: {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            socketTimeoutMS: 30000,
            keepAlive: true,
            maxPoolSize: 50,
            autoIndex: false,
            retryWrites: false
        },
        url: process.env.MONGO_URL,
    },
    server: {
        host: 'localhost',
        port: 1337
    }
}

export default config;
