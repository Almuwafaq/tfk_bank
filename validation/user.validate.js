const Joi = require('joi');

const validateCreateAccount = (body) => {
    const schema = Joi.object({
        first_name: Joi.string().required(),
        other_names: Joi.string().min(2).required(),
        phone: Joi.string().min(4).required(),
        address: Joi.string().min(8).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] }}).required()

    })

    return schema.validate(body)

}


module.exports = {
    validateCreateAccount
}