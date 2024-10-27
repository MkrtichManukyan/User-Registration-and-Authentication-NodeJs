import swaggerAutogen from 'swagger-autogen';

const doc = {
    info: {
        title: 'Nodejs Express + MySQL API',
        description: 'Nodejs Express + MySQL API',
    },
    host: 'localhost:3000',
    schemes: ['http'],
    securityDefinitions: {
        Bearer: {
            type: 'apiKey',
            name: 'Authorization',
            in: 'header',
            description: 'Enter JWT token with "Bearer " prefix, e.g., "Bearer abcde12345"',
        },
    },
    security: [{ Bearer: [] }]
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/app.js']; 

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
});