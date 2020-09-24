const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
    
        tripID: Joi.string()
        .length(24),
        
        accountID: Joi.string()
        .length(24),
        
        seatID: Joi.string()
        .length(24),
       
        price: Joi.string()
        
        
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
        tripID: Joi.string()
        .length(24)
        .required(),
        accountID: Joi.string()
        .length(24)
        .required(),
        seatID: Joi.string()
        .length(24)
        .required(),
        price: Joi.string()
        .required(),

    };

    return Joi.validate(request, updateSchema);
  }
};
