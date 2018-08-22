import { Reservation } from "./reservations";
import { generateCode } from "./generatecode";

'use strict';


let newReservation: Reservation = new Reservation();
for (let fillListWithItems: number = 0; fillListWithItems < 10; fillListWithItems++) {
  newReservation.addReservation(generateCode());
}
newReservation.getCodeBooking();
console.log(`Booking# ${newReservation.getCodeBooking()} for ${newReservation.getDowBooking()}`);
