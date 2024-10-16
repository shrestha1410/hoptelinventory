import { AfterViewChecked, AfterViewInit, Component, DoCheck, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Room, RoomsList } from './Room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { catchError, Observable, of, Subject, Subscription } from 'rxjs';
import { on } from 'events';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.scss'
})
export class RoomsComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy{
stream= new Observable( observer=>{
  observer.next('user1');
  observer.next('user2');
  observer.next('user3');
  observer.complete();
  // observer.error():
});
  hotelName="hilton Hotel";
  noOfRooms=10;
  selectedRoom!: RoomsList;
  hidden=true;
  title="room list";
   toggle(){
    this.hidden=!this.hidden;
    this.title="Rooms List"
   }
   selectRoom( room: RoomsList){
    // console.log(room);
    this.selectedRoom=room;
   }
   room:Room={totalRooms:50,
    availableRooms:20,
    bookedRooms:30,
   };
   @ViewChild(HeaderComponent)
    // {static :true}) 
    headerComponent!:HeaderComponent;
subscription! : Subscription;
  
  //  roomList:RoomsList[]=[{
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
  roomList:RoomsList[]=[];
   constructor(private roomsService:RoomsService){
    // this.roomList= this.roomsService.getRooms();
   } 
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    if(this.subscription){
      this.subscription.unsubscribe();
    }
   console.log("on destroy it is called");

  }
  ngAfterViewChecked(): void {
    // throw new Error('Method not implemented.');
    // this.headerComponent.title ="Rooms View";
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.headerComponent);
    this.headerComponent.title ="Rooms View";
    // console.log(this.headerChildrenComponent);
    this.headerChildrenComponent.last.title="Last room";
  }

  ngDoCheck(): void {
    // throw new Error('Method not implemented.');
    // console.log("On Change is called");
  }
  totalBytes=0;
  error$ = Subject<String>;
  // rooms$= this.roomsService.getRooms$;
  rooms$= this.roomsService.getRooms$.pipe(
    catchError((err)=>{
      console.log(err);
      this.error$.next(err);
      return of([]);
    })
  );
   ngOnInit() :void {
  
  // console.log(this.roomsService.getRooms());
  this.roomsService.getphotos().subscribe((event)=>{
    // console.log(data)
    switch(event.type){
        case HttpEventType.Sent :{
          console.log("Request has been sent");
          break;
            }
        case HttpEventType.ResponseHeader : {
           console.log("Request success ");
            break; 
          }
        case HttpEventType.DownloadProgress : {
            this.totalBytes+=event.loaded;
            break;
          } 
        case HttpEventType.Response : {
          console.log(event.body);
        }   
    }
  })
  this.stream.subscribe( {
    next :(value)=>console.log(value),
    complete : () =>console.log("Complete"),
    error : (err) =>console.log(err)
   })
  this.stream.subscribe( data =>{
    console.log(data);
  })
  // this.roomsService.getRooms().subscribe(
  //   rooms=>{
  //     this.roomList= rooms;
  //   }
  // );
// this.roomsService.getRooms$.subscribe(
//     rooms=>{
//       this.roomList= rooms;
//     }
//   );
   }
   addRoom(){
    const room:RoomsList={
      // roomNumber:"4",
      roomType: "Private Suite",
      amenities: "AC",
      price: 1500,
      photos: "https://unsplash.com/images/stock/high-resolution",
      checkinTime: new Date('7-6-2024'),
      checkoutTime: new Date('7-6-2024'),
      rating: 3.9,
      roomNumber: ''
    };
    //  this.roomList.push(room);
    // this.roomList=[...this.roomList,room];
    this.roomsService.addRoom(room).subscribe((data)=>{
      this.roomList=data;
    });
   }
   @ViewChildren(HeaderComponent) headerChildrenComponent!: QueryList<HeaderComponent>;

   editRoom(){
    const room:RoomsList={
      roomNumber:"3",
      roomType: " Suite",
      amenities: "AC",
      price: 150000,
      photos: "https://unsplash.com/images/stock/high-resolution",
      checkinTime: new Date('7-6-2024'),
      checkoutTime: new Date('7-6-2024'),
      rating: 3.9
    };
 
    this.roomsService.editRoom(room).subscribe((data)=>{
      this.roomList=data;
    })
   }

   deleteRoom(){
    const room:RoomsList={
      roomNumber:"3",
      roomType: "Private Suite",
      amenities: "AC",
      price: 1500,
      photos: "https://unsplash.com/images/stock/high-resolution",
      checkinTime: new Date('7-6-2024'),
      checkoutTime: new Date('7-6-2024'),
      rating: 3.9
    };
    this.roomsService.deleteRoom(room.roomNumber).subscribe((data)=>{
      this.roomList=data;
    })
   }
}
