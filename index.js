// Code your solution here
function findMatching (drivers, query){
    return drivers.filter (
        (possilbleDriver) => possilbleDriver.toLowerCase() === query.toLowerCase())
}

function fuzzyMatch(drivers, string){
    return drivers.filter (
        (possibleDriver) => possibleDriver.startsWith(string))
}

function matchName(drivers, query){
    return drivers.filter (
        (possibleDriver) => possibleDriver.name === query)
}