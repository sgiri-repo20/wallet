// Validation
const Joi = require('@hapi/joi');


const walletValidation = (data) => {
    const schema = Joi.object({
        description: Joi.string().min(6).required(),
        income: Joi.string().required(),
        expense: Joi.string().required()
    })
    
    return schema.validate(data);
}


module.exports.walletValidation = walletValidation;
