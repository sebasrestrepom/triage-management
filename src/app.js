const express = require('express');
const morgan = require('morgan');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();

// importing routes
const patientsRoutes = require('./routes/patients');

// settings
if (process.env.NODE_ENV !== 'test') {
  app.set('port', process.env.PORT || 3000);
}

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// Documentation options
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Triage management',
      description: 'API that manage the triage area on the hospital',
      servers: ['http://localhost:3000'],
    },
  },
  apis: ['src/app.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * tags:
 *   name: Patients
 *   description: Patients registered at the hospital
 */

/**
 * @swagger
 * /patients:
 *  get:
 *      summary: Get the list of patients and order them by priority and waiting time
 *      description: Get the list of patients and order them by priority and waiting time
 *      tags: [Patients]
 *
 *      responses:
 *              '200':
 *                 description: A succesful response
 */

/**
 * @swagger
 * /patients:
 *  post:
 *      summary: Create a new patient
 *      description: Create a new patient. The priority of the sick based on the table of triage
 *                   (1:Resuscitation, 2:Emergency, 3:Urgency, 4:Minor Urgency, 5:Without Urgency)
 *      tags: [Patients]
 *      parameters:
 *       - in: body
 *         name: Patient
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *                 type: string
 *             lastName:
 *                 type: string
 *             identification:
 *                 type: integer
 *             priority:
 *                 type: integer
 *
 *      responses:
 *              '201':
 *                 description: A succesful response
 */

/**
 * @swagger
 * /patients/{id}:
 *  patch:
 *      summary: Update a patient's information using the id
 *      tags: [Patients]
 *      parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: id of a patient to update .
 *         example: 6
 *         value: 6
 *       - in: body
 *         name: Patient Data
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *                 type: string
 *             lastName:
 *                 type: string
 *             identification:
 *                 type: integer
 *             priority:
 *                 type: integer
 *
 *
 *      responses:
 *              '200':
 *                 description: A succesful response
 */

/**
 * @swagger
 * /patients/{id}:
 *  delete:
 *      summary: Delete a patient that has the ID that is supplied
 *      tags: [Patients]
 *      parameters:
 *       - in: path
 *         name: id
 *         type: integer
 *         description: id of a patient to delete .
 *         example: 4
 *         value: 4
 *
 *      responses:
 *              '200':
 *                 description: A succesful response
 */

// routes
app.use('/', patientsRoutes);

// starting the server
app.listen(app.get('port'), () => {
  console.log(`server on port ${app.get('port')}`);
});

module.exports = app;
