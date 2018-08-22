import { Reservation } from "./reservations";

'use strict';
let characterPool: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let pickNumber: string[] = [];
let pickCharacter: string[] = [];
let randomCode: string[] = [];
let joinedList: string[] = [];

for (let currentNumber: number = 0; currentNumber < 4; currentNumber++) {
  pickNumber.push((~~(Math.random() * 10)).toString());
}

for (let currentCharacter: number = 0; currentCharacter < 4; currentCharacter++) {
  pickCharacter.push(characterPool[~~(Math.random() * characterPool.length)].toUpperCase());
}

joinedList = pickNumber.concat(pickCharacter);

for (let currentIndex: number = 0; currentIndex < joinedList.length - 1; currentIndex++) {
  randomCode.push(joinedList[~~(Math.random() * joinedList.length)]);
}

let newReservation: Reservation = new Reservation();
newReservation.addReservation(randomCode.toString());

console.log(`Booking# ${newReservation.getCodeBooking()}, for ${newReservation.getDowBooking()}`);
