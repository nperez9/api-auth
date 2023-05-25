import Joi from 'joi';

export const permissionSchema = Joi.object({
  code: Joi.string().required(),
  endpoint: Joi.string().required(),
  description: Joi.string().required(),
});
