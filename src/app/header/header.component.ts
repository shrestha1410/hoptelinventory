import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  title: string='';
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  constructor() {}

}
