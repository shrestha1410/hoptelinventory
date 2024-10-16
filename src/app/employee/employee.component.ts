import { AfterContentInit, Component, OnInit, Self } from '@angular/core';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss',
  // providers:[RoomsService]
})
export class EmployeeComponent  implements OnInit,AfterContentInit{
  empName:String ="John";
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
//  constructor(@Self() private roomService:RoomsService){

//  }
}
