const Joi = require('@hapi/joi');

module.exports = {
  createPatientSchema: Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    identification: Joi.number().required(),
    priority: Joi.number().required(),
  }),
  updatePatientSchema: Joi.object({
    name: Joi.string().required(),
    lastName: Joi.string().required(),
    identification: Joi.number().required(),
  }),
};
