/*
 * stmnts-04.js
 * Language: javascript
 * Test: tests/stmnts-04.test.js
 * Path: src/stmnts-04.js
 * Temperature Calculator
 */

/**
 * Converts a temperature in Fahrenheit to Celsius rounded to 2 decimal places
 * @param {number} fahrenheit - temperature in Fahrenheit
 * @returns {number} - temperature in Celsius
 */
function fahrenheitToCelsius(fahrenheit) {
  return Math.trunc((fahrenheit - 32) * 5 / 9)  // write your code here & return (32°F − 32) × 5/9 = 0°C
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  return Math.fround(celsius * 9 / 5) + 32 // write your code here & return
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
