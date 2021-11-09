const express = require('express');
const router = express.Router();
const {signin, login} = require('../controllers/account_controller/account.controller')




/**
* @swagger
* /account/signup:
*       post:
*          summary: Account creation.
*          description: Account creation endpoint
*          tags: [Account]
*          security: []
*          requestBody:
*              required: true
*              content:
*                  application/json:
*                     schema:
*                          $ref: '#/components/schemas/signupAccount'
*                     type: 
*                          object             
*          responses:
*                  '200':
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*
*                  404:
*                      content:
*                          'aplication/json': {}
*                          'aplication/xml': {}
*/
router.post('/signup', signin);

/**
 * @swagger
 * /account/login:
 *      post:
 *          summary: Login user.
 *          description: Login to the user's account. Returns the user token.
 *          tags: [Account]
 *          security: []
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                     schema:
 *                          $ref: '#/components/schemas/loginAccount'
 *                     type: 
 *                          object             
 *          responses:
 *                  '200':
 *      
 *                      content: 
 *                          'aplication/json': {}
 *                          'aplication/xml': {}
 *
 *                  400:                
 *                      content:
 *                          'aplication/json': {}
 *                          'aplication/xml': {}
 */
router.post('/login', login);
    
// -----Schemas Swagger-----

/**
 * @swagger
 * name: Registo de usuario
 * description: formato para crear cuenta.
 * components:
 *  schemas:
 *      signupAccount:
 *          type: object
 *          required:
 *              -email
 *              -password
 *          properties:
 *              email:
 *                  type: string
 *                  example: anflopezoc@gmail.com
 *                  description: email user
 *              password:
 *                  type: string
 *                  example: Erick12345$
 *                  description: user password
 *          
 *                  
 */

/**
 * @swagger
 * name: user login
 * description: login format for users.
 * components:
 *  schemas:
 *      loginAccount:
 *          type: object
 *          required:
 *              -email
 *              -password
 *          properties:
 *              email:
 *                  type: string
 *                  example: anflopezoc@gmail.com
 *                  description: email user should have @ and .com or co
 *              password:
 *                  type: string
 *                  example: Erick12345$
 *                  description: Password should have contains at least 10 characters, one lowercase letter, one uppercase letter and specials characters
 *          
 *                  
 */
module.exports = router;