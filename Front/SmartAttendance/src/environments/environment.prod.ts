export const environment = {
  production: true,
  // Auth_URL: 'https://106.139.80.40/Credential',
  BASE_URL: 'http://smartattendance.somee.com',
  addDays(date: string, noOfDays: number) {
    var _date = new Date(date);
    return new Date(_date.setDate(_date.getDate() + noOfDays)).toISOString();
  },
};
