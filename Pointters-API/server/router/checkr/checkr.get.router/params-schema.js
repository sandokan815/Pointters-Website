const joi = require('joi');


module.exports = joi.object().keys({
    idCheckr: joi.string().required()
});
