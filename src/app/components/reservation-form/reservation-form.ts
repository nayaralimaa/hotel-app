import { Component, inject, OnInit } from '@angular/core';
import { 
  FormBuilder, 
  FormGroup, 
  FormsModule, 
  ReactiveFormsModule, 
  Validators
} from '@angular/forms';
import { ReservationService } from '../../services/reservation';
import { Reservation } from '../../models/reservation';
import { ActivatedRoute, Router } from '@angular/router';
import { Home } from "../../components/home/home";

@Component({
  selector: 'app-reservation-form',
  imports: [FormsModule, ReactiveFormsModule, Home],
  templateUrl: './reservation-form.html',
  styleUrl: './reservation-form.css'
})
export class ReservationForm implements OnInit {
  reservationForm: FormGroup = new FormGroup({});
  reservationService = inject(ReservationService);

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    //private reservationService: ReservationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.buildForm();

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id) {
      let reservation = this.reservationService.getReservation(id);
      if(reservation)
        this.reservationForm.patchValue(reservation);
    }
  }

  buildForm() {
    this.reservationForm = this.formBuilder.group({
      checkInDate: ['', Validators.required],
      checkOutDate: ['', Validators.required],
      guestName: ['', Validators.required],
      guestEmail: ['', [Validators.required, Validators.email]],
      roomNumber: ['', Validators.required]
    });
  }

  onSubmit() {
    if(this.reservationForm.valid) {
      let reservation: Reservation = this.reservationForm.value;
      let id = this.activatedRoute.snapshot.paramMap.get('id');

      if(id) {
        this.reservationService.updateReservation(id, reservation);
      } else {
        this.reservationService.addReservation(reservation);
      }

      this.router.navigate(['/list']);
    }
  }
}
