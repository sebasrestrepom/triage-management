const patientRepository = require('../repository/patient-repository');

const findById = async (id) => {
  const patient = await patientRepository.findById(id);
  if (patient !== undefined) {
    return patientRepository.findById(id);
  }
  return 'The patiend dont exists';
};

module.exports = {
  findById,
};
