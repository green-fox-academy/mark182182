import { Reservation } from "./reservations";

'use strict';

let newReservation: Reservation = new Reservation();
for (let fillListWithItems: number = 0; fillListWithItems < 10; fillListWithItems++) {
  newReservation.addReservation();
}

for (let cycleThroughReservations = 0; cycleThroughReservations < newReservation.getReservationList().length; cycleThroughReservations++) {
  if (cycleThroughReservations % 2 == 0) {
    console.log(`Booking# ${newReservation.getReservationList()[cycleThroughReservations]} for ${newReservation.getReservationList()[cycleThroughReservations]}`);
  }
  else {
    console.log(`Booking# ${newReservation.getReservationList()[cycleThroughReservations]} for ${newReservation.getReservationList()[cycleThroughReservations]}`);
  }  
}