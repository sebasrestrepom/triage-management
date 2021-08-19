jest.mock('../src/repository/patient-repository');
const service = require('../src/service/find_by_id');

describe('GET /patients/:id', () => {
  it('should get a patient whith this id', async () => {
    const response = await service.findById(4);

    expect(response).not.toBeNull();
    expect(response).not.toBeUndefined();
    expect(response.id).toBe(4);
  });
});
