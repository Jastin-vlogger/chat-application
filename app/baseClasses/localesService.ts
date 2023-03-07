import { NLocaleResource } from '../src/app/n-services/n-localeResources.service';

export class localesService {
    
    //This method is only to be called during app bootstrap.
    static init(): any {
        localesService.localesInstance = new NLocaleResource();
        return Promise.all([
            localesService.localesInstance.getLang(),
            localesService.localesInstance.getLocales(),
        ]);
    }

    private static localesInstance: NLocaleResource;

    static getLocalesInstance(): any {
        return localesService.localesInstance;
    }
}