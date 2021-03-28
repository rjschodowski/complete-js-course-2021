const rj = {
    firstName: 'R.J.',
    lastName: 'Schodowski',
    birthYear: 1981,
    job: 'web developer',
    friends: ['Huri', 'David', 'Dan'],
    hasDriversLicense: true,

    calcAge: function () {
        this.age = 2021 - this.birthYear;   //<--- Using this.age is adding age as a property to the object. It is like in the previous example when you added rj.location = 'Michigan';
        return this.age;
    },

    getSummary: function () {
         return `${this.firstName} is a ${this.calcAge()} year-old ${this.job}.`
    }
};

console.log(rj.calcAge());
//Now we can just retrieve the age property we already calculated before.
console.log(rj.age);
console.log(rj.getSummary);
