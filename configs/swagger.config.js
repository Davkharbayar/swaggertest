const swaggerJSDoc = require('swagger-jsdoc');  
  
  
const options = {  
  swaggerDefinition: {  
    info: {  
      description  : 'Backend Service',  
      version : '1.0.0',  
      title: 'TEST API BACKEND',  
      logo : 'sadasd'
    },  
    host: `localhost:8002`,  
    basePath: '/',  
    produces: ['application/json'],  
    schemes: [  
      'http',  
    ],  
  },  
  apis: [,'./**/api/route/*.route.js'],  
};  
  
module.exports = {  
  spec() {  
    return swaggerJSDoc(options);  
  },  
};  
