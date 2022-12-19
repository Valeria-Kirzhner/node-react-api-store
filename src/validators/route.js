const Joi = require("joi");
const validatorHandler = require("../middlewares/validatorHandler");

const create = (req, res, next) => {
  const schema = Joi.object().keys({
    path: Joi.string().trim().min(3).max(255).required(),
    description: Joi.string().trim().min(3).max(255).required(),
    response: Joi.string().trim().min(4).max(5000).required(),
    related_to: Joi.number().required(),
  });
  validatorHandler(req, res, next, schema);
};

module.exports = {
  create,
};
