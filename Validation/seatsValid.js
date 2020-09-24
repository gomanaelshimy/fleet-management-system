const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
    
        BusNumber: Joi.number()
        .min(1)
        .max(10)
        .required(),
        Reserved: Joi.boolean()
        .required(),
       
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
        BusNumber: Joi.number()
        .min(1)
        .max(10)
        .required(),
        Reserved: Joi.boolean()
        .required(),
    };

    return Joi.validate(request, updateSchema);
  }
};
