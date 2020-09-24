const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
      name: Joi.string()
        .min(3)
        .max(500),
      email: Joi.string()
        .email(),
      password: Joi.string()
        .alphanum(),

      username: Joi.string()
        .min(3)
        .max(500),
        userType: Joi.string()
      .equal("Admin","User")

    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
      name: Joi.string()
        .min(3)
        .max(500),
      email: Joi.string().email(),
      password: Joi.string()
        .min(8)
        .max(80),

      username: Joi.string()
        .min(3)
        .max(500),
      userType: Joi.string()
      .equal("Admin","User")

    };

    return Joi.validate(request, updateSchema);
  }
};
