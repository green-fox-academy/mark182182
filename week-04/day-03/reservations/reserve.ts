import { Reservation } from "./reservations";

'use strict';

let newReservation: Reservation = new Reservation();
for (let fillListWithItems: number = 0; fillListWithItems < 10; fillListWithItems++) {
  newReservation.addReservation();
}

for (let currentCode = 0, currentDay = 1; currentCode < newReservation.getReservationList().length / 2, currentDay < newReservation.getReservationList().length; currentCode++ , currentDay++) {
  if (currentCode % 2 === 0) {
    console.log(`Booking# ${newReservation.getReservationList()[currentCode]} for ${newReservation.getReservationList()[currentDay]}`);
  }
}