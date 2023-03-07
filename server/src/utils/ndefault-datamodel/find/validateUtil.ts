import { SchemaBuilder } from '../../schema-builder';
import { validateSchema } from '../../ajv-compile';

/**
 * @description Generated funtion for validate node responsible for returing weather node is validated or there is an error
 * @param entitId entity id for schema
 * @param validateObject object that needs to be validated
 * @param isThrowError weather to throw an error or return object with error
 * @returns return scucess object in case object is validated successfully or return / throw error object
 */
export const validateNode = (entitId, validateObject, isThrowError) => {
    const schema = SchemaBuilder.instance.getEntitySchemaByEntityId(entitId);
    const validate = validateSchema(schema, validateObject);
    if (validate.errors) {
        const errorObject = { isValid: false, error: validate.errors };
        if (!isThrowError) {
            return errorObject;
        }
        throw errorObject;
    }
    return { isValid: true, validateObject: validate };
};
