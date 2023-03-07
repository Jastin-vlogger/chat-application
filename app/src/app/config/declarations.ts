import { NeutrinosAuthGuardService } from 'neutrinos-oauth-client';
import { PageNotFoundComponent } from '../not-found.component';
import { LayoutComponent } from '../layout/layout.component';
import { ImgSrcDirective } from '../directives/imgSrc.directive';
import { APP_INITIALIZER } from '@angular/core';
import { NDataSourceService } from '../n-services/n-dataSorce.service';
import { environment } from '../../environments/environment';
import { NLocaleResource } from '../n-services/n-localeResources.service';
import { NAuthGuardService } from 'neutrinos-seed-services';
import { ArtImgSrcDirective } from '../directives/artImgSrc.directive';
import { localesService } from '../../../baseClasses/localesService';

window['neutrinos'] = {
  environments: environment,
};

//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-audioTestComponent
import { audioTestComponent } from '../components/pages/audioTest.component';
//CORE_REFERENCE_IMPORT-messagesComponent
import { messagesComponent } from '../components/messages/messages.component';
//CORE_REFERENCE_IMPORT-chatuiComponent
import { chatuiComponent } from '../components/chat ui/chatui.component';
//CORE_REFERENCE_IMPORT-user
import { user } from '../sd-services/user';
//CORE_REFERENCE_IMPORT-login
import { login } from '../sd-services/login';
//CORE_REFERENCE_IMPORT-homeComponent
import { homeComponent } from '../components/pages/home.component';
//CORE_REFERENCE_IMPORT-buttonComponent
import { buttonComponent } from '../components/button/button.component';
//CORE_REFERENCE_IMPORT-emailInputComponent
import { emailInputComponent } from '../components/inputs/emailInput.component';
//CORE_REFERENCE_IMPORT-paragraphComponent
import { paragraphComponent } from '../components/paragraph/paragraph.component';
//CORE_REFERENCE_IMPORT-navbarComponent
import { navbarComponent } from '../components/navbar/navbar.component';
//CORE_REFERENCE_IMPORT-loginComponent
import { loginComponent } from '../components/pages/login.component';
//CORE_REFERENCE_IMPORT-headingComponent
import { headingComponent } from '../components/Heading/heading.component';

/**
 * Reads datasource object and injects the datasource object into window object
 * Injects the imported environment object into the window object
 *
 */
export function startupServiceFactory(startupService: NDataSourceService) {
  return () => {
    return new Promise((resolve, reject) => {
      startupService.getDataSource().then(() => {
        localesService.init().then(() => {
          resolve(null);
        });
      });
    });
  };
}

/**
 *bootstrap for @NgModule
 */
export const appBootstrap: any = [LayoutComponent];

/**
 *declarations for @NgModule
 */
export const appDeclarations = [
  ImgSrcDirective,
  LayoutComponent,
  PageNotFoundComponent,
  ArtImgSrcDirective,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-audioTestComponent
  audioTestComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-messagesComponent
  messagesComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-chatuiComponent
  chatuiComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-homeComponent
  homeComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-buttonComponent
  buttonComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-emailInputComponent
  emailInputComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-paragraphComponent
  paragraphComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-navbarComponent
  navbarComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-loginComponent
  loginComponent,
  //CORE_REFERENCE_PUSH_TO_DEC_ARRAY-headingComponent
  headingComponent,
];

/**
 * provider for @NgModule
 */
export const appProviders = [
  NDataSourceService,
  NLocaleResource,
  {
    // Provider for APP_INITIALIZER
    provide: APP_INITIALIZER,
    useFactory: startupServiceFactory,
    deps: [NDataSourceService],
    multi: true,
  },
  NAuthGuardService,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-user
  user,
  //CORE_REFERENCE_PUSH_TO_PRO_ARRAY-login
  login,
];

/**
 * Routes available for bApp
 */

// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_START
export const appRoutes = [
  { path: 'test', component: loginComponent },
  { path: 'home', component: homeComponent },
  { path: 'audio', component: audioTestComponent },
  { path: '', redirectTo: 'test', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];
// CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY_END
