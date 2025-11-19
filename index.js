//! Start by creating the variables for the data recorded
// Temperature data for each day
let day1TempF = 32;
let day2TempC = 25;
let day3TempF = 70;
let day4TempC = 18;
let day5TempF = 80;
let day6TempC = 15;
let day7TempF = 72;
let day8TempC = 28;
let day9TempF = 68;
let day10TempC = 20;
let day11TempF = 75;
let day12TempC = 23;
let day13TempF = 82;
let day14TempC = 30;
let day15TempF = 65;
let day16TempC = 22;
let day17TempF = 77;
let day18TempC = 26;
let day19TempF = 78;
let day20TempC = 24;
let day21TempF = 73;
let day22TempC = 21;
let day23TempF = 79;
let day24TempC = 27;
let day25TempF = 71;
let day26TempC = 19;
let day27TempF = 74;
let day28TempC = 17;
let day29TempF = 76;
let day30TempC = 29;

//* Then work on the conversion of the temperature from Celsius to Fahrenheit (or viceversa)
// Convert Fahrenheit to Celsius
function fahrenheitToCelsius(tempF) {
    return (tempF - 32) * 5 / 9;
}
//* Then apply the conversion to calculate the total in the other unit of measurement
// Convert Celsius to Fahrenheit (optional, if needed)
function celsiusToFahrenheit(tempC) {
    return (tempC * 9 / 5) + 32;
}
let day1TempC = fahrenheitToCelsius(day1TempF); // 32°F → 0°C
let day3TempC = fahrenheitToCelsius(day3TempF); // 70°F → 21.11°C
let day5TempC = fahrenheitToCelsius(day5TempF); // 80°F → 26.67°C
let day7TempC = fahrenheitToCelsius(day7TempF); // 72°F → 22.22°C
let day9TempC = fahrenheitToCelsius(day9TempF); // 68°F → 20°C
let day11TempC = fahrenheitToCelsius(day11TempF); // 75°F → 23.89°C
let day13TempC = fahrenheitToCelsius(day13TempF); // 82°F → 27.78°C
let day15TempC = fahrenheitToCelsius(day15TempF); // 65°F → 18.33°C
let day17TempC = fahrenheitToCelsius(day17TempF); // 77°F → 25°C
let day19TempC = fahrenheitToCelsius(day19TempF); // 78°F → 25.56°C
let day21TempC = fahrenheitToCelsius(day21TempF); // 73°F → 22.78°C
let day23TempC = fahrenheitToCelsius(day23TempF); // 79°F → 26.11°C
let day25TempC = fahrenheitToCelsius(day25TempF); // 71°F → 21.67°C
let day27TempC = fahrenheitToCelsius(day27TempF); // 74°F → 23.33°C
let day29TempC = fahrenheitToCelsius(day29TempF); // 76°F → 24.44°C

//! Start the calculation of the total temperatures
// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(tempC) {
    return (tempC * 9 / 5) + 32;
}
//! Start the calculation of the average temperatures
// Total in Celsius (sum all days, converting Fahrenheit days)
let tot_temperature_in_celsius =
    day1TempC + day2TempC + day3TempC + day4TempC +
    day5TempC + day6TempC + day7TempC + day8TempC +
    day9TempC + day10TempC + day11TempC + day12TempC +
    day13TempC + day14TempC + day15TempC + day16TempC +
    day17TempC + day18TempC + day19TempC + day20TempC +
    day21TempC + day22TempC + day23TempC + day24TempC +
    day25TempC + day26TempC + day27TempC + day28TempC +
    day29TempC + day30TempC;

// Total in Fahrenheit (sum all days, converting Celsius days)
let tot_temperature_in_fahrenheit =
    day1TempF + celsiusToFahrenheit(day2TempC) +
    day3TempF + celsiusToFahrenheit(day4TempC) +
    day5TempF + celsiusToFahrenheit(day6TempC) +
    day7TempF + celsiusToFahrenheit(day8TempC) +
    day9TempF + celsiusToFahrenheit(day10TempC) +
    day11TempF + celsiusToFahrenheit(day12TempC) +
    day13TempF + celsiusToFahrenheit(day14TempC) +
    day15TempF + celsiusToFahrenheit(day16TempC) +
    day17TempF + celsiusToFahrenheit(day18TempC) +
    day19TempF + celsiusToFahrenheit(day20TempC) +
    day21TempF + celsiusToFahrenheit(day22TempC) +
    day23TempF + celsiusToFahrenheit(day24TempC) +
    day25TempF + celsiusToFahrenheit(day26TempC) +
    day27TempF + celsiusToFahrenheit(day28TempC) +
    day29TempF + celsiusToFahrenheit(day30TempC);

//* Call the variables: avg_temperature_in_fahrenheit and avg_temperature_in_celsius
// Average temperatures
let avg_temperature_in_celsius = tot_temperature_in_celsius / 30;
let avg_temperature_in_fahrenheit = tot_temperature_in_fahrenheit / 30;

//! Console.log the results for your own inspection if you'd like
// Console log results
console.log("Total Celsius:", tot_temperature_in_celsius);
console.log("Total Fahrenheit:", tot_temperature_in_fahrenheit);
console.log("Average Celsius:", avg_temperature_in_celsius);
console.log("Average Fahrenheit:", avg_temperature_in_fahrenheit);

//* Call the variables: tot_temperature_in_fahrenheit and tot_temperature_in_celsius
// Export for tests
module.exports = {
    tot_temperature_in_fahrenheit,
    tot_temperature_in_celsius,
    avg_temperature_in_fahrenheit,
    avg_temperature_in_celsius
};