const sinon = require('sinon');
const patientRepository = require('../src/repository/patient-repository');
const service = require('../src/service/find_all_patients');
const Patient = require('../src/model/patient');

/*
jest.mock('../src/repository/patient-repository', () => ({
  findAll: jest.fn(),
}));
*/

const PATIENTS_LIST = [
  new Patient(4, 'Jhon', 'Doe', 7, 3, '2021-08-11 17:27:49'),
  new Patient(3, 'Fulano', 'Detal', 2345, 2, '2021-08-11 17:27:49'),
];

const EMPTY_PATIENTS_LIST = [];

describe('findAllPatients should', () => {
  afterEach(() => {
    // patientRepository.findAll.mockClear();
    patientRepository.findAll.restore();
  });

  it('get a list of the patients', async () => {
    // patientRepository.findAll.mockReturnValueOnce(Promise.resolve(PATIENTS_LIST));
    const findAllMock = sinon
      .stub(patientRepository, 'findAll')
      .withArgs(1, 10)
      .resolves(PATIENTS_LIST);

    const patients = await service.findAllPatients(1, 10);

    expect(patients).not.toBeNull();
    expect(patients).not.toBeUndefined();
    expect(patients.length).toBe(2);

    expect(patients[0].id).toBe(PATIENTS_LIST[0].id);

    expect(findAllMock.calledOnce).toBe(true);
  });

  it('return a empty list', async () => {
    // patientRepository.findAll.mockReturnValueOnce(Promise.resolve(EMPTY_PATIENTS_LIST));
    sinon.stub(patientRepository, 'findAll').resolves(EMPTY_PATIENTS_LIST);

    const patients = await service.findAllPatients();

    expect(patients).not.toBeNull();
    expect(patients).not.toBeUndefined();
    expect(patients.length).toBe(0);
  });
});
