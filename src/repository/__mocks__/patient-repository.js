const Patient = require('../../model/patient');

const db = {
  patients: [
    {
      id: 4,
      name: 'John',
      lastName: 'Doe',
      identification: 7,
      priority: 3,
      entry_time: '2021-08-11 17:27:49',
    },
  ],
};

async function findAll() {
  return db || [];
}

async function findById(id) {
  const collection = await findAll();
  return Object.values(collection.patients).filter((patient) => patient.id === id)[0] || null;
}

async function save(data) {
  if (!db.patients) {
    db.patients = [];
  }
  db.patients.push(data);
  return data;
}

module.exports = {
  findAll,
  findById,
  save,
};
