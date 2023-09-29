"use strict";
// City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
function city_country(city, country) {
    return (`${city}, ${country}`);
}
// calling funciton with city name with its country.
let countryCity1 = city_country("Karachi", "Pakistan");
let countryCity2 = city_country("Baku", "Azerbaijan");
let countryCity3 = city_country("New York", "America");
console.log(countryCity1);
console.log(countryCity2);
console.log(countryCity3);
