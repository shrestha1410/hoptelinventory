import { AfterContentInit, Component, ContentChild, Host, OnInit, ViewChild } from '@angular/core';
import { EmployeeComponent } from '../employee/employee.component';
import { RoomsService } from '../rooms/services/rooms.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  // providers: [RoomsService]
})
export class ContainerComponent implements OnInit , AfterContentInit{
  @ContentChild(EmployeeComponent) employee!:EmployeeComponent;
  ngAfterContentInit(): void {
    // throw new Error('Method not implemented.');
   console.log(this.employee); 
   this.employee.empName="hritik"
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
//  constructor(@Host() private roomService:RoomsService){}
}
