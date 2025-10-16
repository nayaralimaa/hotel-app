import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { Reservation } from '../../models/reservation';
import { ReservationService } from '../../services/reservation';
import { RouterLink } from '@angular/router';
import { Home } from "../../components/home/home";

@Component({
  selector: 'app-reservation-list',
  imports: [RouterLink, Home],
  templateUrl: './reservation-list.html',
  styleUrl: './reservation-list.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationList {
  reservationService = inject(ReservationService);
  reservations = computed(() => this.reservationService.getReservations());

  deleteReservation(id: string) {
    this.reservationService.deleteReservation(id);
  }
}
