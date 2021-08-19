const router = require('express').Router();
const { createPatientSchema, updatePatientSchema } = require('../schemas');
const validateInformation = require('../middleware');

const patientsController = require('../controllers/patientsController');

router.get('/patients', patientsController.list);
router.get('/patients/:id', patientsController.findById);
router.post('/patients', validateInformation(createPatientSchema), patientsController.save);
router.patch('/patients/:id', validateInformation(updatePatientSchema), patientsController.update);
router.delete('/patients/:id', patientsController.deletePatient);

module.exports = router;
