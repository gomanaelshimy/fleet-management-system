const Joi = require("joi");

module.exports = {
  createValidation: request => {
    const createSchema = {
        subTrips: Joi.string()
        .min(3)
        .max(500),
        
        BusNumber: Joi.number()
        .min(1)
        .max(10),
        
        departureTime: Joi.string()
        .min(3)
        .max(500),
    
        date: Joi.date()
        .min(3)
        .max(500),
  
        bookings: Joi.bookings()
        .min(0)
        .max(12),
  
        fromTo: Joi.string()
        .min(0)
        .max(30),

    
    };

    return Joi.validate(request, createSchema);
  },

  updateValidation: request => {
    const updateSchema = {
        subTrips: Joi.string(),
        BusNumber: Joi.number()
        .min(1)
        .max(10),
        departureTime: Joi.string()
        .min(3)
        .max(500),

        date: Joi.string()
        .min(3)
        .max(500)
        ,
        bookings: Joi.bookings()
        .min(0)
        .max(12)
        ,
        fromTo: Joi.string()
        .min(0)
        .max(30)
        
    };

    return Joi.validate(request, updateSchema);
  }
};
