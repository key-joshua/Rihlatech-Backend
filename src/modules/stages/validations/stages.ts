import Joi from "joi";

const createStageSchema = Joi.object({
  title: Joi.string().required().messages({
    "any.required": "title is required",
    "string.empty": "title cannot be empty",
    "string.base": "title should be a type of string",
  }),
  description: Joi.string().required().messages({
    "any.required": "description is required",
    "string.empty": "description cannot be empty",
    "string.base": "description should be a type of string",
  }),
});

const deleteStageSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "id is required",
    "string.empty": "id cannot be empty",
    "string.base": "id should be a type of string",
  }),
});

export default { createStageSchema, deleteStageSchema };
