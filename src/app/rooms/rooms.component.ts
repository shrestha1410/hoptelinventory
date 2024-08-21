import { Component } from '@angular/core';
import { Room, RoomsList } from './Room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent {
  hotelName="hilton Hotel";
  noOfRooms=10;
  hidden=false;
   toggle(){
    this.hidden=!this.hidden;
   }
   room:Room={totalRooms:50,
    availableRooms:20,
    bookedRooms:30,
   };
   roomList:RoomsList[]=[{
    roomsType:"claassic",
    amenities:"AC",
    price:500,
    image:"https://unsplash.com/images/stock/high-resolution",
    checkInTime:new Date('7-6-2024'),
    checkOutTime:new Date('7-6-2024'),
   },
   {
    roomsType:"Dulex",
    amenities:"AC",
    price:500,
    image:"https://unsplash.com/images/stock/high-resolution",
    checkInTime:new Date('7-6-2024'),
    checkOutTime:new Date('7-6-2024'),
   }]
}
