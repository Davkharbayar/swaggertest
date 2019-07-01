module.exports = function(app){

    const testcontroller  = require('../countroller/test.controller.js');
    
       
     /**
     * @swagger
     *
     * /api/test:
     *   get:
     *     tags : 
     *       - TEST 
     *     description: Тест өгөгдөл татах 
     *     responses:
     *       200:
     */   
    app.get('/api/test',  testcontroller.test);
    
    
    
     /**
     * @swagger
     *
     * /api/test:
     *   post:
     *     tags : 
     *       - TEST 
     *     description: Тест өгөгдөл татах 
     *     parameters:
     *       - name: id
     *         description: Test Value 
     *         in: body
     *         required: false
     *         type: integer
     *     responses:
     *       200:
     */   
    
    
    app.post('/api/test',  testcontroller.createtestdata);
    
    
     /**
     * @swagger
     *
     * /api/test:
     *   put:
     *     tags : 
     *       - TEST 
     *     description: Тест өгөгдөл татах 
     *     responses:
     *       200:
     *         description: OK 
     *         schema: 
     *           type: object 
     *           properties: 
     *             Value1: 
     *               type: string 
     *               description: тайлбар 1. 
     *             Value2: 
     *               type: string 
     *               description: Тайлбар 2.
     *             Value3: 
     *               type: string 
     *               description: Тайлбар 3. 
     */   
    app.put('/api/test',  testcontroller.update);
    
     /**
     * @swagger
     *
     * /api/test/{id}:
     *   delete:
     *     tags : 
     *       - TEST 
     *     description: Тест өгөгдөл устгах 
     *     parameters:
     *       - name: id
     *         description: Test Value 
     *         in: path
     *         required: false
     *         type: integer
     *     responses:
     *       200:
     */   
    app.delete('/api/test/:id',  testcontroller.delete);
    
    
    }
