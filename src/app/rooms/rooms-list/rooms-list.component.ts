import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomsList } from '../Room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrl: './rooms-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy {
@Input() roomsList:RoomsList[] |null=[];
@Input() title:String='';
@Output() selectedRoom= new EventEmitter<RoomsList>();
constructor() {}
  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
   console.log("on destroy is called");
  }

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
  console.log(changes);
  if(changes["title"]){
    this.title= changes["title"].currentValue.toUpperCase();
  }  
}
ngOnInit() : void{}

selectRoom(room :RoomsList){
this.selectedRoom.emit(room);
}

}
