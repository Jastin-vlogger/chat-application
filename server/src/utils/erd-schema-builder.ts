import * as fs from 'fs-extra';
import * as path from 'path';
import { eachItem, EachItemCallBackParameter } from './fs-utils';

export const build = async () => {
    const dirPath = path.join(process.cwd(), 'src/entities-schema-definitions');
    const definitions = {};
    const entitySchemaDefinitionKey = {};
    if (fs.existsSync(dirPath)) {
        await eachItem(dirPath, async (details) => {
            const res = await getSchemas(details);
            if (res.metadata.name) {
                for (const schema of Object.values<Schemas>(res.schemas)) {
                    const erdToEntityKey = erdToEntityName(res.metadata.name, schema.name);
                    definitions[erdToEntityKey] = schema;
                    if (!duplicateErdName.includes(schema.name)) {
                        entitySchemaDefinitionKey[schema.id] = erdToEntityKey;
                    }
                    delete schema["id"]
                }
            }
        });
    }
    return [definitions, entitySchemaDefinitionKey];

};

export const erdToEntityName = (erdName: string, entityName: string) => `${erdName} ~ ${entityName}`;

/**
 * @description Get the dereferenced erd object with included metadata
 */
const getSchemas = async (details: EachItemCallBackParameter) => {
    const erdSchemaDefs: ERDSchemaDefs = {
        metadata: {} as ERDMeatdata,
        schemas: {} as { [key: string]: Schemas },
    };
    if (details.itemStat.isDirectory()) {
        const mDataPath = details.itemPath + '.json';
        if (!fs.existsSync(mDataPath)) {
            return erdSchemaDefs;
        }
        const erdName = details.item;
        const erdMetadataFile = path.join(details.itemPath, '../', erdName + '.json');
        erdSchemaDefs.metadata = (Object.values(await fs.readJSON(erdMetadataFile))?.[0] || {}) as ERDMeatdata;
        const files = await fs.readdir(details.itemPath);
        for (const file of files) {
            const schema = await fs.readJSON(path.join(details.itemPath, file));
            deleteProperties(schema, unnecessaryEntityProperties);
            let isDuplicate = false;
            let targetEntites = [];
            let deleteKey = {};
            for (const property of Object.values<any>(schema.properties)) {
                const propertyMetadata = property[__n__metadata__];
                const delProps = [];
                const def = (property as any).default;
                const rel = propertyMetadata.relation;
                if (rel && rel.joinColumnName && rel.type !== 'm2o') {
                    let tget;
                    if (rel.type == 'o2m') {
                        tget = `${property?.[__n__metadata__].relation?.targetEntity}_${schema.name}`
                    } else {
                        tget = property?.[__n__metadata__].relation?.targetEntity;
                    }
                    const $ref = $refBuilder(tget, erdSchemaDefs.metadata.name);
                    if (typeArrayRelationTypes.includes(propertyMetadata.relation.type)) {
                        if (rel.eager) {
                            property.type = 'array';
                            property.items = {
                                $ref,
                            }
                        } else {
                            delete schema.properties[property.name];
                            continue;
                        }
                    } else {
                        if (!rel.eager) {
                            property.type = rel.jsType;
                        } else {
                            property.type = 'object';
                            property.$ref = $ref;
                        }
                    }
                }
                else if (rel && rel.joinColumnName && rel.type == 'm2o') {
                    isDuplicate = true;
                    targetEntites.push(rel.targetEntity)
                    deleteKey[rel.targetEntity] = property.name
                    property.type = rel.jsType;
                }
                else {
                    delProps.push('$ref');
                }
                if (typeof def !== 'boolean' && !def) {
                    delProps.push('default');
                }
                deleteProperties(property, unnecessaryColumnProperties.concat(delProps));
            }
            erdSchemaDefs.schemas[schema.name] = schema;
            if (isDuplicate && targetEntites.length) {
                for (let i = 0; i < targetEntites.length; i++) {
                    let nw = JSON.parse(JSON.stringify(schema));
                    nw.name = `${schema.name}_${targetEntites[i]}`
                    duplicateErdName.push(nw.name);
                    delete nw.properties[deleteKey[targetEntites[i]]]
                    nw.required = nw.required?.filter(item => { return item !== deleteKey[targetEntites[i]] })
                    erdSchemaDefs.schemas[`${schema.name}_${targetEntites[i]}`] = nw;
                }

            }

        }
    }
    return erdSchemaDefs;
};

const deleteProperties = (object: { [x: string]: any }, properties = []) => {
    for (const property of properties) {
        delete object[property];
    }
};

/**
 * @description Get function that builds the path value for the $ref
 */
const $refBuilder = (tget, erdName) => {

    return tget ? `#/definitions/${erdToEntityName(erdName, tget)}` : '';
};

type ERDSchemaDefs = {
    metadata: ERDMeatdata;
    schemas: { [key: string]: Schemas };
};

type ERDMeatdata = {
    id: string;
    name: string;
};

type Schemas = {
    name: string;
    id: string;
    properties: any;
};
const duplicateErdName = [];
const __n__metadata__ = '__n__metadata__';
const unnecessaryEntityProperties = ['x', 'y', '$schema', '__unique__', '__check__', '__index__', 'collapsed'];
const unnecessaryColumnProperties = [__n__metadata__, 'description', 'id', 'isRelationAttr'];
const typeArrayRelationTypes = ['m2m', 'o2m'];
