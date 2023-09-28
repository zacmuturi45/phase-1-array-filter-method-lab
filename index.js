const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

const findMatching = (driver, name) => {let match = driver.filter(elem=>elem.toUpperCase()===name.toUpperCase())
    return match;
}; 
console.log(findMatching(drivers, 'Bobby'));

const fuzzyMatch = (driver, name) => {let fuzzy = driver.filter(cond=>cond.slice(0, 2)===name.slice(0, 2))
    return fuzzy;
};
console.log(fuzzyMatch(drivers,'Sa'));

const matchName = (drivers, name) => {
    let match = drivers.filter((driver) => driver.name===name);
    return match;
}