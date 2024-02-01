/*const usersWithManySkills = Object.keys(users).reduce((acc, user) => {
    if (users[user].skills.length > acc.skills.length) {
      return users[user];
    }
    return acc;
  }, {});
  
  console.log("Person with many skills:", usersWithManySkills);
  */
 /* const loggedInUsersCount = Object.values(users).filter(user => user.isLoggedIn).length;
const usersWithPointsGreaterOrEqual50Count = Object.values(users).filter(user => user.points >= 50).length;

console.log("Logged in users count:", loggedInUsersCount);
console.log("Users with points greater than or equal to 50 count:", usersWithPointsGreaterOrEqual50Count);
*/
/*const mernDevelopers = Object.keys(users).filter(user => {
  const skills = users[user].skills;
  return skills.includes('MongoDB') && skills.includes('Express') && skills.includes('React') && skills.includes('Node');
});

console.log("MERN stack developers:", mernDevelopers);
*/
/*const updatedUsers = {
  ...users,
  YourName: {
    email: 'yourname@yourname.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 25,
    isLoggedIn: true,
    points: 60
  }
};

console.log("Updated users object:", updatedUsers);
*/
/*const userKeys = Object.keys(users);

console.log("User keys:", userKeys);
*/
/*const userValues = Object.values(users);

console.log("User values:", userValues);
*/

const countries = {
  country1: {
    name: 'Country1',
    capital: 'Capital1',
    population: 1000000,
    languages: ['Language1', 'Language2']
  },
  country2: {
    name: 'Country2',
    capital: 'Capital2',
    population: 2000000,
    languages: ['Language3', 'Language4']
  },

};


Object.values(countries).forEach(country => {
  console.log(`
    Country: ${country.name}
    Capital: ${country.capital}
    Population: ${country.population}
    Languages: ${country.languages.join(', ')}
  `);
});

