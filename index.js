// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = (drivers) => {
    return drivers.slice(2,4);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (multiplier) => {
    return function(fare) {
        return multiplier * fare;
    }
}

const fareDoubler = createFareMultiplier(2); 

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = (arrayOfDrivers, driversReturnFunction) => {
    return driversReturnFunction(arrayOfDrivers);
}