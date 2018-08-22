import { Reservation } from "./reservations";
import { generateCode } from "./generatecode";

'use strict';

let newReservation: Reservation = new Reservation();
for (let fillListWithItems: number = 0; fillListWithItems < 10; fillListWithItems++) {
  newReservation.addReservation(generateCode());
}
// for (let bookingIndex: number = 0; bookingIndex < newReservation.getReservationList().length; bookingIndex++) {
//   console.log(`Booking# ${newReservation.getCodeBooking()} for ${newReservation.getDowBooking()}`);
// }
console.log(newReservation.getDowBooking());