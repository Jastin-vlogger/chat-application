import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { SDBaseService } from 'app/n-services/SDBaseService';
import { localesService } from '../../../baseClasses/localesService';
import { NDataModel } from '../../../baseClasses/nDataModel.class';

@Injectable({ providedIn: 'root' })
export class SDPageCommonService {
    private componentRefPropertiesMap = new Map<any, any>();

    constructor(
        private sdService: SDBaseService,
        private componentFactoryResolver: ComponentFactoryResolver
    ) {}
    constructFlowObject(componentInstance: any) {
        const factory = this.componentFactoryResolver.resolveComponentFactory(
            componentInstance.constructor
        );
        const inputProperties = factory.inputs.map(i => i.propName);
        const outputProperties = factory.outputs.map(i => i.propName);
        const bh: any = {
            sdService: this.sdService,
        };
        Object.defineProperty(bh, 'pageInput', {
            value: Object.defineProperties(
                {},
                this.definePropertiesGetter(
                    componentInstance,
                    inputProperties,
                    'Input'
                )
            ),
        });
        Object.defineProperty(bh, 'pageOutput', {
            value: Object.defineProperties(
                {},
                this.definePropertiesGetter(
                    componentInstance,
                    outputProperties,
                    'Output'
                )
            ),
        });
        this.sdService.__constructDefault(bh);
        return bh;
    }

    private definePropertiesGetter(
        componentInstance: any,
        properties: string[],
        type: string
    ): PropertyDescriptorMap {
        const mappedVal = this.componentRefPropertiesMap.get(componentInstance);
        if (!mappedVal) {
            this.componentRefPropertiesMap.set(componentInstance, {});
        }
        if (!this.componentRefPropertiesMap.get(componentInstance)[type]) {
            const propertiesAccessDescriptors = {};
            for (const property of properties) {
                propertiesAccessDescriptors[property] = {
                    get() {
                        return componentInstance[property];
                    },
                };
            }
            this.componentRefPropertiesMap.get(componentInstance)[type] =
                propertiesAccessDescriptors;
        }
        return this.componentRefPropertiesMap.get(componentInstance)[type];
    }

    addPageDefaults(page) {
        Object.defineProperties(page, {
            locales: {
                value: {},
            },
            dm: {
                value: new NDataModel(),
            },
        });
        const localesInst = localesService.getLocalesInstance();
        Object.defineProperties(page.locales, {
            keys: {
                get: () => localesInst['locale'] || {},
            },
            language: {
                get: () => localesInst['language'],
                set: l => (localesInst['language'] = l),
            },
            languages: {
                get: () => localesInst['languages'] || {},
            },
        });
        this.sdService.__constructDefault(page);
    }

    deletePageFromMap(compInstance) {
        this.componentRefPropertiesMap.delete(compInstance);
    }
}
