// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import { FirebaseOptions } from "@angular/fire";

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCg19u4sGu9ZhqqHuVXedWM8ZeL2qvKd3A",
    authDomain: "greg-8095f.firebaseapp.com",
    databaseURL: "https://greg-8095f.firebaseio.com",
    projectId: "greg-8095f",
    storageBucket: "greg-8095f.appspot.com",
    messagingSenderId: "475809743777",
    appId: "1:475809743777:web:8e2e7484507c16ae"
  } as FirebaseOptions
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
