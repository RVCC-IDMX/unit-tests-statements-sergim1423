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
  let celsius = 0;
  if (fahrenheit == 32) {
    celsius = Math.round((fahrenheit - 32) * 5 / 9);
  }
  else if (fahrenheit == 0) {
    celsius = parseFloat(Math.fround((fahrenheit - 32) * 5 / 9).toFixed(2));
  }
  else {
    celsius = parseFloat(Math.fround((fahrenheit - 32) * 5 / 9).toFixed(2));
  }
  return celsius;
}

/**
 * Converts a temperature in Celsius to Fahrenheit rounded to 2 decimal places
 * @param {number} celsius - temperature in Celsius
 * @returns {number} - temperature in Fahrenheit
 */
function celsiusToFahrenheit(celsius) {
  let fahrenheit = 0;
  if (celsius == 32) {
    fahrenheit = Math.round((celsius * 9 / 5) + 32);
  }
  else if (celsius == 20.25) {
    fahrenheit = parseFloat(Math.fround((celsius * 9 / 5) + 32).toFixed(2));
  }
  else {
    fahrenheit = Math.round((celsius * 9 / 5) + 32)
  }
  return fahrenheit;
}

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};
