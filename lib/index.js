/**
 * Check version of library
 */
export const APP_VERSION = "1.0.3";

/**
 *Use for scraping sites/forums for email addresses
 * @param {*} stringToCheck
 */
export function containsEmail(stringToCheck) {
  const emailRegex = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return emailRegex.test(stringToCheck);
}

/**
 * solution drawn from
 * https://stackoverflow.com/questions/46155/how-to-validate-email-address-in-javascript
 * check https://github.com/hapijs/isemail for more complete solutions, there are many solutions
 *
 * @param {*} emailStringToCheck
 */
export function isValidEmail(emailStringToCheck) {
  var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(emailStringToCheck.toLowerCase());
}

/**
 * solution drawn from
 * https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url
 * https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url?noredirect=1&lq=1
 * Checks if url string is valid
 * This does not check for ftp etc
 *
 * @param {*} urlString
 */
export function isValidUrl(urlString) {
  const urlRegex = /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,})/;
  return urlRegex.test(urlString);
}

/**
 * https://stackoverflow.com/questions/5284147/validating-ipv4-addresses-with-regexp
 * @param {*} ipAddressString
 */
export function isValidIPAddress(ipAddressString) {
  const ipRegex = /^(?:(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])(\.(?!$)|$)){4}$/;
  return ipRegex.test(ipAddressString);
}

/**
 * https://stackoverflow.com/questions/15491894/regex-to-validate-date-format-dd-mm-yyyy
 * @param {*} dateToTestString
 */
export function isValidDate(dateToTestString) {
  const dateRegex = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/;
  return dateRegex.test(dateToTestString);
}

/**
 *  A generic phone number validation
 * @param {*https://stackoverflow.com/questions/4338267/validate-phone-number-with-javascript} phoneNumber 
 * Valid formats:

*(123) 456-7890
*(123)456-7890
*123-456-7890
*123.456.7890
*1234567890
*+31636363634
*075-63546725
 */
export function isValidPhoneNumber(phoneNumber) {
  const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(phoneNumber);
}

/**
 *
 * Standard password verification with regex
 * https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
 * @param {*} password
 */
export function isValidPassword(password) {
  const passwordRegex = /^(?=\S*[a-z])(?=\S*[A-Z])(?=\S*\d)(?=\S*[^\w\s])\S{8,}$/;
  return passwordRegex.test(password);
}

/**
 * Drawn from 
 * https://stackoverflow.com/questions/44257027/negate-javascript-regex-pattern
 *  && openui5-sdk jquery.sap.unicode-dbg
 * @param {*} character 
 */
export function isValidAscii(character){
  return  /^[\u0001-\u00ff]*$/.test(character);
}