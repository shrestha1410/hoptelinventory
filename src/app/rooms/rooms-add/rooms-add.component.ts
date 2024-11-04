import { Component } from '@angular/core';
import { RoomsList } from '../Room';
import { RoomsService } from '../services/rooms.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrl: './rooms-add.component.scss',
})
export class RoomsAddComponent {
  room: RoomsList = {
    roomType: '',
    amenities: '',
    checkinTime: new Date(),
    checkoutTime: new Date(),
    photos: '',
    price: 0,
    rating: 0,
    roomNumber: '',
  };

  successMessage :string='';
  constructor(private roomService: RoomsService) { }
  addRoom(roomsForm :NgForm) {
    this.roomService.addRoom(this.room)
    .subscribe((data) =>{
      this.successMessage="Room added Successfully"
      console.log(data)
     roomsForm.reset(
      {
        roomType: '',
        amenities: '',
        checkinTime: new Date(),
        checkoutTime: new Date(),
        photos: '',
        price: 0,
        rating: 0,
        roomNumber: '',
      }
     )});
  }
}
