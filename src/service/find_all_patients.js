const patientRepository = require('../repository/patient-repository');
const Patient = require('../model/patient');

const findAllPatients = (pageSize, pageNumber) => patientRepository.findAll(pageSize, pageNumber);

module.exports = {
  findAllPatients,
};
