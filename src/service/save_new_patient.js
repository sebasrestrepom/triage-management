const patientRepository = require('../repository/patient-repository');

const saveANewPatient = (data) => {
  const result = patientRepository.save(data);
  return result;
};

module.exports = {
  saveANewPatient,
};
