const { findAllPatients } = require('../service/find_all_patients');
const { saveANewPatient } = require('../service/save_new_patient');
const { updateDataPatient } = require('../service/update_data_patient');
const { deleteAPatient } = require('../service/delete_patient');
const { findById } = require('../service/find_by_id');

const controller = {};

controller.list = async (req, res) => {
  const pageNumber = req.query.pageNumber || 0;
  const pageSize = req.query.pageSize || 10;
  const patients = await findAllPatients(pageNumber, pageSize);
  res.send(patients);
};

controller.findById = async (req, res) => {
  const { id } = req.params;
  const patient = await findById(id);
  res.send(patient);
};

controller.save = async (req, res) => {
  const data = req.body;
  const patient = await saveANewPatient(data);
  res.send(patient);
};

controller.update = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;
  const patient = await updateDataPatient(id, newData);
  res.send(patient);
};

controller.deletePatient = async (req, res) => {
  const { id } = req.params;
  const patient = await deleteAPatient(id);
  res.send(patient);
};

module.exports = controller;
