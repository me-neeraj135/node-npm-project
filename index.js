const moment = require(`moment`);
const lodash = require(`lodash`);

let date = moment().format("MMMM Do YYYY, h:mm:ss a");
console.log(date);

let day = moment().format("dddd");
console.log(day);

let newDate = moment().format("MMM Do YY");
console.log(newDate);

let testDate = moment("2020-14-01", "YYYY-MM-DD").isValid();
console.log(testDate);

let addDay = moment().add(2, "days").calendar();

console.log(addDay);

// adds 7 months to current date

let addMonth = moment().add(7, "Months").calendar();
console.log(addMonth);

// adds 7 years to current date

let addYears = moment().add(7, "Years").calendar();

console.log(addYears);

// subtracts 7 days to current date

let subtractsDay = moment().subtract(7, "Days").calendar();
console.log(subtractsDay);

// subtracts 7 months to current date

let subtractsMonths = moment().subtract(7, "Months").calendar();
console.log(subtractsMonths);

// subtracts 7 years to current date

let subtractsYear = moment().subtract(7, "Years").calendar();
console.log(subtractsYear);

// Find the difference between the following 2 dates:

date1: 2014 - 11 - 27;
date2: 2015 - 09 - 16;

const date1 = moment(`2014, 11, 11`);
const date2 = moment(`2015, 09, 11`);

console.log(date2.diff(date1));

// Check is 2020-01-01 date after 2018-01-01

let dateOne = moment(`2020 - 01 - 01`);
let dateTwo = moment(`2018 - 01 - 01`);

console.log(dateTwo.isAfter(dateOne));

// Check if the year 2019 is a leap year
console.log(`2019 is a leap year ${moment(`2019`).isLeapYear()}`);

// Check if the year 2020 is a leap year
console.log(`2020 is a leap year ${moment(`2020`).isLeapYear()}`);

// Use lodash to do the following things:

// chunk
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let other = lodash.chunk(array, 2);
console.log(other);

// compact

let falsy = [0, NaN, 1, ``, undefined, false, 5, 9, 2];

let compact = lodash.compact(falsy);
console.log(compact);

// concat

let arrayOne = [`Hello World`];
let newArray = lodash.concat(arrayOne, `welcome to free codeCamp`);
console.log(newArray);

// difference

let numArrayOne = [2, 3, 6, 7, 8];
let numArrayTwo = [3, 2, 1];
let difference = lodash.difference(numArrayOne, numArrayTwo);
console.log(difference);

// differenceBy
let numArray1 = [2.1, 3.1, 6.1, 7.1, 8.1];
let numArray2 = [1.4, 2.1, 1.1];
let differenceBy = lodash.differenceBy((numArrayOne, numArrayTwo));
console.log(difference);

// Use lodash to do the following things:

// countedBy
let countArray1 = [2.1, 3.1, 6.1, 7.1, 8.1, 2.1, 2.1, 2.1, 6.1];
let countArray2 = [1.4, 2.1, 1.1];

let countedBy = lodash.countBy(countArray1);
console.log(countedBy);

// forEach

lodash.forEach([1, 2], function (value) {
  console.log(value);
});

lodash.forEach([{ a: 1, b: 2 }], (key, value) => {
  console.log(key, value);
});

// _.eachRight;
lodash.eachRight([1, 2, 3, 4, 5], function (value) {
  console.log(value);
});

// every
console.log(lodash.every([true, 1, null, "yes"], Boolean));

console.log(lodash.every([2, 4, 6, 8, 10], elm => elm % 2 === 0));

// filtter

var users = [
  { user: "barney", age: 36, active: true },
  { user: "fred", age: 40, active: false },
];

console.log(lodash.filter(users, elm => !elm.active));
console.log(lodash.filter(users, elm => elm.active));
