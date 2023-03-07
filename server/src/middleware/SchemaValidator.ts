import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { validateSchema } from '../utils/ajv-compile';
import { SchemaBuilder } from '../utils/schema-builder';

export const validateRequest = () => validateRequestBody;

const validateRequestBody = (req: Request, res: Response, next: NextFunction) => {
    const schemaData = SchemaBuilder.instance.getReqBodySchema(req.url, req.method.toLowerCase() as any);
    const entityName = schemaData.entityName;
    const validate = validateSchema(schemaData.schema.properties[entityName],req.body[entityName])
    if (validate.errors) {
        res.status(StatusCodes.BAD_REQUEST).send(validate.errors);
        return;
    }
    next();
};



