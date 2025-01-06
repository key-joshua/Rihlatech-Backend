import Joi from "joi";

const createTaskSchema = Joi.object({
  stageId: Joi.string().required().messages({
    "any.required": "stageId is required",
    "string.empty": "stageId cannot be empty",
    "string.base": "stageId should be a type of string",
  }),
  tag: Joi.string().required().messages({
    "any.required": "tag is required",
    "string.empty": "tag cannot be empty",
    "string.base": "tag should be a type of string",
  }),
  title: Joi.string().required().messages({
    "any.required": "title is required",
    "string.empty": "title cannot be empty",
    "string.base": "title should be a type of string",
  }),
  dueDate: Joi.string().isoDate().required().messages({
    "any.required": "dueDate is required",
    "string.empty": "dueDate cannot be empty",
    "string.base": "dueDate should be a valid ISO date string",
  }),
  assignee: Joi.string().required().messages({
    "any.required": "assignee is required",
    "string.empty": "assignee cannot be empty",
    "string.base": "assignee should be a type of string",
  }),
  description: Joi.string().required().messages({
    "any.required": "description is required",
    "string.empty": "description cannot be empty",
    "string.base": "description should be a type of string",
  }),
  priority: Joi.string().required().valid("Low", "Medium", "High").messages({
    "any.required": "priority is required",
    "string.empty": "priority cannot be empty",
    "string.base": "priority should be a type of string",
    "any.only": "priority must be one of 'Low', 'Medium', or 'High'",
  }),
});

const updateTaskSchema = Joi.object({
  stageId: Joi.string().required().messages({
    "any.required": "stageId is required",
    "string.empty": "stageId cannot be empty",
    "string.base": "stageId should be a type of string",
  }),
});

const updateDeleteTaskSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "id is required",
    "string.empty": "id cannot be empty",
    "string.base": "id should be a type of string",
  }),
});

export default { createTaskSchema, updateTaskSchema, updateDeleteTaskSchema };
