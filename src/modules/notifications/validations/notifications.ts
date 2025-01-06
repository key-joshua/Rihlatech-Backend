import Joi from "joi";

const createNotificationSchema = Joi.object({
  isRead: Joi.boolean().required().messages({
    "any.required": "isRead is required",
    "boolean.base": "isRead should be a type of boolean",
  }),
  taskTitle: Joi.string().optional().messages({
    "string.base": "taskTitle should be a type of string",
  }),
  timestamp: Joi.date().required().messages({
    "any.required": "timestamp is required",
    "date.base": "timestamp should be a valid date",
  }),
  toStage: Joi.string().optional().messages({
    "string.base": "toStage should be a type of string",
  }),
  fromStage: Joi.string().optional().messages({
    "string.base": "fromStage should be a type of string",
  }),
  type: Joi.string() .required() .valid("TASK_MOVED", "TASK_ASSIGNED", "STATUS_UPDATE") .messages({
    "any.required": "type is required",
    "string.empty": "type cannot be empty",
    "string.base": "type should be a type of string",
    "any.only": "type must be one of 'TASK_MOVED', 'TASK_ASSIGNED', or 'STATUS_UPDATE'",
  }),
  message: Joi.string().required().messages({
    "any.required": "message is required",
    "string.empty": "message cannot be empty",
    "string.base": "message should be a type of string",
  }),
});

const deleteNotificationSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required": "id is required",
    "string.empty": "id cannot be empty",
    "string.base": "id should be a type of string",
  }),
});

export default { createNotificationSchema, deleteNotificationSchema };
