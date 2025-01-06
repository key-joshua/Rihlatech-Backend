import Joi from 'joi';
import StatusCodes from 'http-status-codes';

export const routeBodyValidation = (schema: Joi.ObjectSchema | Joi.ArraySchema) => async (req, res, next) => {
    try {
      const { error } = schema.validate(req.body, { abortEarly: false });
      if (error) {
        const errorMessage = `${error.details[0].message} in the body.`;
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, error: errorMessage });
      }
  
      return next();
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
};

export const routeParamsValidation = (schema: Joi.ObjectSchema | Joi.ArraySchema) => async (req, res, next) => {
    try {
      const { error } = schema.validate(req.params, { abortEarly: false });
      if (error) {
        const errorMessage = `${error.details[0].message} in the params.`;
        return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ status: StatusCodes.BAD_REQUEST, error: errorMessage });
      }
  
      return next();
    } catch (error: any) {
        return res
        .status(error?.status || StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ status: error?.status || StatusCodes.INTERNAL_SERVER_ERROR, error: error.toString() });
    }
  };