const honda = {
    name: 'Equinox',
    wheels: 4,
    windows: 6,
    breaks: true,
    gasStations: ['Costco', 'Marathon', 'Meijer', 'Kroger', 'Shell'],
    gasLocations: ['Okemos', 'Haslett', 'East Lansing', 'Williamston'],
    mileage: 117000,
    buyGas: function (stationIndex, locationIndex) {
        return [this.gasStations[stationIndex], this.gasLocations[locationIndex]];
    }
};
const arr = ['Costco', 'Marathon', 'Meijer', 'Kroger', 'Shell'];
const [a, b, c, d, e] = arr;
console.log(a, b, c, d, e);
console.log(honda.wheels);

const [gas] = honda.buyGas(0);
console.log(gas);

const [foo, , soo, ] = honda.gasLocations;
console.log(foo, soo);
console.log(`I went to ${foo} to buy gas, but I ended up getting it in ${soo} instead.`)


console.log(`I prefer to buy gas first at ${a}, but if I can't make it there, I usually go to ${d} instead.`)

//returns I went to Okemos to buy gas, but I ended up getting it in East Lansing instead.

//Dude, you did it yourself! Great work man!!!

// const [starter, mainCourse] = restaurant.order(2,0);
// console.log(starter, mainCourse);