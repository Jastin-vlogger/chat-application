import {
    getConnection,
    Connection,
    Repository,
    FindManyOptions,
} from 'typeorm';
import { EntityMap } from '../../../services/entity-ref-mapping';
import { SDBaseService } from '../../../services/SDBaseService';

export class dmUtils {
    DbConnection: Connection;
    constructor(id) {
        this.connectDb(id);
    }
    _get_repo(entityId: string): Repository<unknown> {
        // resolve entity class here.
        return this.DbConnection.getRepository(EntityMap[entityId]);
    }
    connectDb(id) {
        let sdService = new SDBaseService();
        let config = sdService.getConfigObj('db-config', id);
        this.DbConnection = getConnection(config.dbOption.name);
    }
    async find(
        entityId: string,
        where: any,
        skip?: number,
        order?: any,
        take?: number
    ) {
        const findOptions: FindManyOptions = {
            where,
            skip,
            order,
            take,
        };
        return this._get_repo(entityId).find(findOptions);
    }
    async insert(entityId: string, entityObj: any) {
        const currentRepo = this._get_repo(entityId);
        const entityInstance = currentRepo.create(entityObj);
        return currentRepo.save(entityInstance);
    }
    async updateById(entityId: string, entityObj: any) {
        const currentRepo = this._get_repo(entityId);
        const entityInstance = currentRepo.create(entityObj);
        return this.DbConnection.manager.save(entityInstance);
    }

    async updateByFilter(entityId: string, filter, entityObj: any) {
        const currentRepo = this._get_repo(entityId);
        const entityInstance = currentRepo.create(entityObj);
        return currentRepo.update(filter, entityInstance);
    }

    async delete(entityId: string, filter: any) {
        const currentRepo = this._get_repo(entityId);
        return currentRepo.delete(filter);
    }
}
