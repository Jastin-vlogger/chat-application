import Ajv from 'ajv';

/**
 * @description This functions validated the a particular object against a provided schema
 * @param schema schema for validate node
 * @param validateObject object that needs to be validated
 * @returns 
 */
export const validateSchema = (schema, validateObject)=>{
    const ajv = new Ajv({ allErrors: true, strict: false });
    const validate = ajv.compile(schema);
    validate(validateObject);
    return validate;
}