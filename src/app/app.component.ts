import { InitService } from './init.service';
import { AfterViewInit, Component, ElementRef, Inject, OnInit, Optional, QueryList, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { HeaderComponent } from './header/header.component';
import { LoggerService } from './logger.service';
// import { localStorageToken } from "./localstorage.token";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:`<h1>Hello from inline</h1>
  // <p>this is paragraph</p>`,
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit, AfterViewInit{
  title = 'hoptelinventory';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // console.log(this.name.nativeElement.innerText ="Hilten Hotel");
    // this.loggerService.log('App Componnet,ngOnInit()');
    // this.name.nativeElement.innerText="hilton hotel";
      // this.localstorage.setItem('name', 'hilton hotel');
  }
  ngAfterViewInit(): void {
    // throw new Error('Method not implemented.');
    // const componentRef=this.vcr.createComponent(RoomsComponent);
    // componentRef.instance.noOfRooms=50;

  }

  // role="Admin";
  // @ViewChild("user",{read:ViewContainerRef})vcr! :ViewContainerRef
//  @ViewChild("name",{static:true}) name!: ElementRef;
 constructor( @Optional() private loggerService :LoggerService, private initService:InitService){
// @Inject(localStorageToken) private localstorage: Storage ){
console.log(initService);
 }
}

