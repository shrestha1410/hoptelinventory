import { Inject, Injectable } from '@angular/core';
import { RoomsListComponent } from '../rooms-list/rooms-list.component';
import { RoomsList } from '../Room';
import { APP_SERVICE_CONFIG } from '../../appConfig/appconfig.service';
import { AppConfig } from '../../appConfig/appconfig.interface';
import { HttpClient,HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';
// import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {
  roomList:RoomsList[]=[];
  //{
  //   roomNumber:1,
  //   roomType:"claassic",
  //   amenities:"AC",
  //   price:500,
  //   image:"https://unsplash.com/images/stock/high-resolution",
  //   checkInTime:new Date('7-6-2024'),
  //   checkOutTime:new Date('7-6-2024'),
  //   rating: 4.5
  //  },
  //  {
  //   roomNumber:2,
  //   roomType:"Dulex",
  //   amenities:"AC",
  //   price:500,
  //   image:"https://unsplash.com/images/stock/high-resolution",
  //   checkInTime:new Date('7-6-2024'),
  //   checkOutTime:new Date('7-6-2024'),
  //   rating:3.4999
  //  },
  //  {
  //   roomNumber:3,
  //   roomType:"Private Suite",
  //   amenities:"AC",
  //   price:1500,
  //   image:"https://unsplash.com/images/stock/high-resolution",
  //   checkInTime:new Date('7-6-2024'),
  //   checkOutTime:new Date('7-6-2024'),
  //   rating:4.9
  //  }];
getRooms(){
  // return this.roomList;
  return this.http.get<RoomsList[]>('/api/rooms');
}

  constructor( private http: HttpClient,@Inject(APP_SERVICE_CONFIG) private config:AppConfig) {
    // console.log(environment.apiEnpoint)
     console.log(this.config.apiEndpoint);
     console.log("Room service initialized...") 
    }
     getRooms$=this.http.get<RoomsList[]>('/api/room').pipe(
      shareReplay(1)
     );
     
     addRoom(room:RoomsList){
      return this.http.post<RoomsList[]>('/api/rooms',room);
     }
     editRoom(room:RoomsList){
      return this.http.put<RoomsList[]>(`/api/rooms/${room.roomNumber}`,room);
     }
     deleteRoom(id:String){
      return this.http.delete<RoomsList[]>(`/api/rooms/${id}`);
     }
     getphotos(){
      const request = new HttpRequest("GET",'https://jsonplaceholder.typicode.com/photos',{
        reportProgress: true
      });
      return this.http.request(request);
     }
}
