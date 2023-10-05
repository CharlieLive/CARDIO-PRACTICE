const { log } = console;
const { table } = console;

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
    age: 37,
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
    age: 34,
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
    age: 24,
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
    age: 21,
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
    age: 27,
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
    age: 38,
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
    age: 39,
  },
];

// 1. Show all users names
const usersNames = users.map((user) => user.name);
log(usersNames);

// 2. Show all users friends
const allFriends = users.flatMap((user) => user.friends);
log(allFriends);
// 3. Show all users friends (cannot be repeated)
const filteredFriends = allFriends.filter(
  (user, index, array) => array.indexOf(user) === index
);
table(filteredFriends);

// 4. Show all users with less than 3k balance

const poorUsers = users.filter((user) => user.balance < 3000);
table(poorUsers);
// 5. Show every users with blue eyes

// 7. reduce (Show the richest user)

const richestUser = users.reduce((maxBalance, currentUser) => {
  if (currentUser.balance > maxBalance) {
    maxBalance = currentUser.balance;
    log(maxBalance);
  }
  return maxBalance;
}, 0);
log(richestUser);

console.clear();

// 8. Show the average age of users

const totalAge = users.reduce((acc, user) => {
  acc += user.age;
  return acc;
}, 0);
log(totalAge);
const averageAge = Math.round(totalAge / users.length);

log(averageAge);

// 8. Write a function that returns a users with a given age:

function userWithGivenAge(users, age) {
  const filteredUsers = users.filter((user) => {
    if (user.age === age) {
      return user;
    }
  });
  return filteredUsers;
}

log(userWithGivenAge(users, 39));

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const bornIn1500 = inventors.filter((i) => i.year > 1500 && i.year < 1600);
log(bornIn1500);
// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
const allNames = inventors.map((i) => `${i.first} ${i.last}`);
log(allNames);
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
const sortedInventors = inventors.sort((a, b) => b.year - a.year);

table(sortedInventors);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const sumAge = inventors.reduce((acc, i) => {
  acc += i.passed - i.year;
  return acc;
}, 0);
log(sumAge);

// 5. Sort the inventors by years lived
const yearsLived = inventors.sort(
  (a, b) => a.passed - a.year - (b.passed - b.year)
);
table(yearsLived);

// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these


const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];


   const transportation = data.reduce(function (obj, item) {
     if (!obj[item]) {
       obj[item] = 0;
     }
     obj[item]++;
     return obj;
   }, {});

console.log(transportation);
   
console.clear()