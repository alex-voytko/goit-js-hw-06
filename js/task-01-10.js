import users from "./users.js";
//Task 1
const getUserNames = users => users.map(user => user.name)
console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Task 2
const getUsersWithEyeColor = (user, color) => 
    user.filter(({eyeColor}) => eyeColor === color);
console.log(getUsersWithEyeColor(users, 'blue')); 
// [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

//Task 3
const getUsersWithGender = (array, gender) =>
  array.filter((array) => array.gender === gender).map(({name}) => name)
console.log(getUsersWithGender(users, 'male')); 
// [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Task 4
const getInactiveUsers = users => 
    users.filter(user => !user.isActive).map(({name}) => name)
    console.log(getInactiveUsers(users)); 
// [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

//Task 5
const getUserWithEmail = (users, _email) => 
  users.find(({email}) => _email === email)

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
// {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 
// {объект пользователя Elma Head}
