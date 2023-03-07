import * as fs from 'fs';
import * as jsonSchemaDeref from 'json-schema-deref-sync';
import { basename, join, resolve } from 'path';
import * as swaggerUi from 'swagger-ui-express';
import * as schemaBuilder from './erd-schema-builder';
import log from './Logger';
const derefOptions = {
    mergeAdditionalProperties: true,
};
export class SchemaBuilder {
    swaggerDocument: swaggerUi.JsonObject;

    private _dereffedSchema: swaggerUi.JsonObject;
    private _entitySchemaDefinitionKey;
    private static _instance: SchemaBuilder;
    private _basePathLength: number;

    static get instance() {
        return (
            SchemaBuilder._instance ||
            (SchemaBuilder._instance = new SchemaBuilder())
        );
    }

    private constructor() {
        this.swaggerDocument = {
            swagger: '2.0',
            paths: {},
            definitions: {},
        };
    }

    async buildAPIDocs(contextPath: string) {
        this.swaggerDocument.basePath = contextPath;
        this._basePathLength = this.swaggerDocument.basePath.length;

        await Promise.allSettled([
            this.buildAPIPaths()
                .then(sPaths => {
                    this.swaggerDocument.paths = sPaths;
                })
                .catch(e => {
                    log.error(
                        '[SchemaBuilder] Failed to construct "swagger.path" docs object'
                    );
                    log.error(e);
                }),
            schemaBuilder
                .build()
                .then(([definitions,entitySchemaDefinitionKey]) => {
                    this.swaggerDocument.definitions = definitions;
                    this._entitySchemaDefinitionKey = entitySchemaDefinitionKey;
                })
                .catch(e => {
                    log.error(
                        '[SchemaBuilder] Failed to construct "swagger.definitions" docs object'
                    );
                    log.error(e);
                }),
        ]);
    }

    private async getSwaggerFiles(dir: string) {
        const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
        const files = await Promise.all(
            dirents.map(dirent => {
                const res = resolve(dir, dirent.name);
                return dirent.isDirectory()
                    ? this.getSwaggerFiles(res)
                    : {
                          [basename(res)]: JSON.parse(
                              fs.readFileSync(res).toString()
                          ),
                      };
            })
        );
        return files.flat();
    }

    private async buildAPIPaths() {
        let swaggerDocumentsPaths = {};
        const httpSwaggerDepsPath = join(process.cwd(), 'src/swaggerDeps');
        const dmSwaggerDepsPath = join(process.cwd(), 'src/dmSwaggerDeps')
        let httpSwaggerDeps = [];
        let dmSwaggerDeps = [];
        try {
            httpSwaggerDeps = await this.getSwaggerFiles(httpSwaggerDepsPath);
        } catch (error) { }

        try {
            dmSwaggerDeps = await this.getSwaggerFiles(dmSwaggerDepsPath);
        } catch (error) {}

        const swaggerDeps = [...httpSwaggerDeps].concat(dmSwaggerDeps);
        for (const file of swaggerDeps) {
            const fileName = Object.keys(file)[0];
            swaggerDocumentsPaths = {
                ...swaggerDocumentsPaths,
                ...file[fileName],
            };
        }
        return swaggerDocumentsPaths;
    }

    get dereffedSchema() {
        if (!this._dereffedSchema) {
            this._dereffedSchema = jsonSchemaDeref(
                this.swaggerDocument,
                derefOptions
            );
        }
        return this._dereffedSchema;
    }

    // getDereferencedSchema(erdName: string, entityName: string) {
    //     return this.dereffedSchema.definitions[schemaBuilder.erdToEntityName(erdName, entityName)];
    // }

    getReqBodySchema(
        httpPath: string,
        method: 'put' | 'post' | 'delete' | 'patch'
    ) {
        const pathWithoutCtxPath = httpPath.slice(this._basePathLength);
        const schema = this.dereffedSchema.paths[pathWithoutCtxPath][
            method
        ].parameters.find(p => p.in === 'body').schema;
        let entityName;
        // getting entity name based on type from object
        if(Object.keys(schema.properties).length > 0){
            entityName = Object.keys(schema?.properties).filter(key=>key != 'filter')[0];
        }
        return {entityName:entityName, schema:schema};
    }

    /**
     * @description This function return the schema based on entity id 
     * @param {string} entityId entity for which schema is required
     * @returns  schema based of entity id
     */
    getEntitySchemaByEntityId(entityId){
        const schema = this.dereffedSchema.definitions[this._entitySchemaDefinitionKey[entityId]]
        if(schema) {
            return schema
        }
    }
}
