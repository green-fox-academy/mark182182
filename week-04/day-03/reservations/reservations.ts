import { Reservationy } from './reservationy';
import { daysOfTheWeek } from './daysoftheweek';
import { generateCode } from './generatecode';
'use strict'

class Reservation implements Reservationy, daysOfTheWeek {
  days: string[];
  private reservationList: string[][];

  constructor() {
    this.reservationList = [];
  }

  addReservation() {
    this.reservationList.push([this.getCodeBooking()], [this.getDowBooking()]);
  }
  getReservationList(): string[][] {
    return this.reservationList;
  }
  getDowBooking(): string {
    return this.generateDay();

  }
  getCodeBooking(): string {
    return generateCode();
  }

  generateDay(): string {
    this.days = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
    return this.days[~~(Math.random() * 7)];
  }
}

export { Reservation };
