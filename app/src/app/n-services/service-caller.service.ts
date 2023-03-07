//append_imports_start

import * as sd_sUtmd8S9OYDet9MQ from 'app/sd-services/login'; //_splitter_
import * as sd_Lkf463mDLx7SmOus from 'app/sd-services/user'; //_splitter_
import { Injectable } from '@angular/core'; //_splitter_
//append_imports_end
@Injectable({ providedIn: 'root' })
export class __NEU_ServiceInvokerService__ {
  constructor(
    private sd_sUtmd8S9OYDet9MQ: sd_sUtmd8S9OYDet9MQ.login,
    private sd_Lkf463mDLx7SmOus: sd_Lkf463mDLx7SmOus.user
  ) {}
  invoke(
    injectedServiceId: string,
    methodName: string,
    ...methodArguments: any[]
  ) {
    return this[injectedServiceId][methodName](...methodArguments);
  }
}
