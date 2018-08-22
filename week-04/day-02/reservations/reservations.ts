import { Reservationy } from './reservationy';
import { daysOfTheWeek } from './daysoftheweek';
'use strict';

class Reservation implements Reservationy, daysOfTheWeek {
  day: string[];
  private reservationList: string[];

  constructor() {
    this.reservationList = [];
  }

  addReservation(reservationCode: string, ) {
    this.reservationList.push(reservationCode, this.getDowBooking());
  }

  getDowBooking(): string {
    return this.generateDay();
  }
  getCodeBooking(): string {
    if (this.reservationList.length > 0) {
      for (let currentElement = 0; currentElement < this.reservationList.length; currentElement++) {
        return this.reservationList[currentElement];
      }
    }
  }
  generateDay(): string {
    this.day = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return this.day[Math.floor(Math.random() * 7)];
  }
}

export { Reservation };