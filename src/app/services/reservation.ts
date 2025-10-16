import { Injectable, signal } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private reservations = signal<Reservation[]>([]);

  constructor() {
    let savedReservations = localStorage.getItem('reservations');
    this.reservations = savedReservations ? JSON.parse(savedReservations) : [];
  }

  getReservations() {
    return this.reservations.asReadonly();
  }

  getReservation(id: string): Reservation | undefined {
    return this.reservations().find(res => res.id === id);
  }

  addReservation(reservation: Reservation) {
    reservation.id = Date.now().toString();
    this.reservations.update(current => [...current, reservation]);
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  updateReservation(id: string, updatedReservation: Reservation) {
    let index = this.reservations().findIndex(res => res.id === id);
    this.reservations.update(current => {
      const updated = [... current];
      updated[index] = updatedReservation;
      return updated;
    });
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }

  deleteReservation(id: string) {
    let index = this.reservations().findIndex(res => res.id === id);
    this.reservations.update(current => current.filter((_, i) => i !== index));
    localStorage.setItem('reservations', JSON.stringify(this.reservations));
  }
}
