const patientRepository = require('../repository/patient-repository');

const updateDataPatient = async (id, newData) => {
  const patient = await findById(id);
  if (patient !== undefined) {
    return patientRepository.update(id, newData);
  }
  return 'The patiend dont exists';
};

module.exports = {
  updateDataPatient,
};
