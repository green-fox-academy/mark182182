'use strict';
function personalData(name, age, heigthInMeters) {
    this.name = name;
    this.age = age;
    this.heigthInMeters = heigthInMeters;
}

var Mark = new personalData('Mark', '23', 1.7);
console.log(Mark.name, '\n' + Mark.age, '\n' + Mark.heigthInMeters);