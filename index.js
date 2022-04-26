// Code your solution in this file!
const returnFirstTwoDrivers = arrayOfDrivers => {
  return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = arrayOfDrivers => {
  return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(integer) {
//   return function(fare) {
//     return fare * integer
//   }
// }

const createFareMultiplier = integer => fare => fare*integer

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

// function selectDifferentDrivers (arrayOfDrivers, eitherFirstOrLast) {
//   if (eitherFirstOrLast === returnFirstTwoDrivers) {
//     return returnFirstTwoDrivers(arrayOfDrivers)
//   } else if (eitherFirstOrLast === returnLastTwoDrivers) {
//     return returnLastTwoDrivers(arrayOfDrivers)
//   }
// }
function selectDifferentDrivers(drivers, driversToReturn) {
  return driversToReturn(drivers);
};