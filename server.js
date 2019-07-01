const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');


const app = express();
const port = 8002;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.options("*",function(req,res,next){
    res.header("Access-Control-Allow-Origin", req.get("Origin")||"*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,PATCH,OPTIONS');
      res.status(200).end();
  });



require('./api/route/test.route.js')(app);

const swaggerSpec = require('./configs/swagger.config').spec();  
const swaggerOptions = {  
  customSiteTitle: 'Test api', 
  customCss: '.topbar { display: none }',  
};  
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerOptions));  
app.get('/docs.json', (req, res) => {  
res.setHeader('Content-Type', 'application/json');  
  res.status(200).json(swaggerSpec);  
});  


    // Start the server
  app.listen(port, () => {
    console.log('We are live on ' + port);
})

