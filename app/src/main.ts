import { firebaseInitForServiceWorker } from './libConfig/firebaseInitForServiceWorker';
import { environment } from './environments/environment';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import { AppModule } from './app/app.module';
import { NSystemService } from 'neutrinos-seed-services';
declare global {
    var cordova;
}

if (environment.properties['production']) {
    enableProdMode();
}

async function bootstrapNow() {
    try {
        if (environment.properties['console_runtime'] === 'true') {
            const URL = `${window.location.origin}/api/environments`;
            const data = await (await fetch(URL)).json();

            Object.assign(environment.properties, data.properties);
            window['neutrinos'] = {
                environments: environment,
            };
        }

        await platformBrowserDynamic().bootstrapModule(AppModule);
        NSystemService.getInstance();

        if (window['navigator'] && window['navigator']['splashscreen'])
            window['navigator']['splashscreen'].hide(); // hide splash screen

        const pushType = environment.properties['pushType']
            ? environment.properties['pushType']
            : 'FCM';

        if (
            environment.properties['isNotificationEnabled'] &&
            pushType.toUpperCase() === 'FCM'
        )
            firebaseInitForServiceWorker();
    } catch (error) {
        console.error('FetchError: ', error);

        if (confirm('Could not fetch the environment, Please reload'))
            window.location.reload();
    }
}

function checkDeviceLocal(): string {
    if (window['cordova']) {
        return 'mobile';
    } else {
        return 'browser';
    }
}

const deviceTypeLocal = checkDeviceLocal();

if (deviceTypeLocal === 'browser') {
    bootstrapNow();
}

/**
 * deviceready will only be triggered by a cordova app
 * and since we are not using cordova browser to server files.
 * However, if cordova browser would be used then the app will
 * get bootstrapped
 */
document.addEventListener('deviceready', function () {
    bootstrapNow();
});
