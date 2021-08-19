jest.mock('../src/repository/patient-repository');
const service = require('../src/service/save_new_patient');

describe('POST /patients', () => {
  it('should POST a new user', async () => {
    const data = {
      id: 3,
      name: 'Fulano',
      lastName: 'Detal',
      identification: 123,
      priority: 1,
      entry_time: '2021-08-11 17:27:49',
    };

    const response = await service.saveANewPatient(data);

    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
  });
});
