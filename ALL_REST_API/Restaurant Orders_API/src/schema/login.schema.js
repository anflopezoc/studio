const Joi = require('joi');

const loginSchema = Joi.object({

    email: Joi.string()
            .email({minDomainSegments:2,
                tlds: {allow: ['com','net','co']}
            })
            .required(),
    password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
});

module.exports = loginSchema;
