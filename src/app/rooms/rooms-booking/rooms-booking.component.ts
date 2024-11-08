import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-rooms-booking',
  templateUrl: './rooms-booking.component.html',
  styleUrl: './rooms-booking.component.scss'
})
export class RoomsBookingComponent implements OnInit{

  id :number=0;
  // id$=this.router.params.pipe(
  //   map(params => params['id'])
  // )
   id$= this.router.paramMap.pipe(map(params=>
      params.get("id")
   )
  )
  constructor(private router:ActivatedRoute){

  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    // this.router.params.subscribe((params)=>{
    //   console.log(params);
    //   this.id=params['id'];
    // })
  //  this.id=this.router.snapshot.params['id'];
    // this.router.paramMap.subscribe((params)=>{
    //   params.get("id");
    // })
  }

}
