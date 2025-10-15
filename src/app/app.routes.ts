import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { ReservationForm } from './components/reservation-form/reservation-form';
import { ReservationList } from './components/reservation-list/reservation-list';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'list', component: ReservationList },
  { path: 'new', component: ReservationForm },
  { path: 'edit/:id', component: ReservationForm },
  { path: '**', redirectTo: '' }
];
