// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Auth_URL: 'https://106.139.80.40/Credential',
  // BASE_URL: 'https://localhost:44361'
  BASE_URL: 'http://smartattendance.somee.com',
  addDays(date: string, noOfDays: number) {
    var _date = new Date(date);
    return new Date(_date.setDate(_date.getDate() + noOfDays)).toISOString();
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
