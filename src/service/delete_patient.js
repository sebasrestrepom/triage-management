const patientRepository = require('../repository/patient-repository');

const deleteAPatient = async (id) => {
  const patient = await findById(id);
  if (patient !== undefined) {
    return patientRepository.deletePatient(id);
  }
  return 'The patient dont exists';
};

module.exports = {
  deleteAPatient,
};
