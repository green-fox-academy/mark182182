import { Reservationy } from './reservationy';
import { daysOfTheWeek } from './daysoftheweek';
'use strict';

class Reservation implements Reservationy, daysOfTheWeek {
  day: string[];
  private reservationList: string[][];

  constructor() {
    this.reservationList = [];
  }

  addReservation(reservationCode: string) {
    this.reservationList.push([reservationCode], [this.generateDay()]);
  }
  getReservationList(): string[][] {
    return this.reservationList;
  }
  getDowBooking(): string {
    return this.reservationList[1][0];

  }
  getCodeBooking(): string {
    return this.reservationList[0][0];
  }

  generateDay(): string {
    this.day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return this.day[Math.floor(Math.random() * 7)];
  }
}

export { Reservation };