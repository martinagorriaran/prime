import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menuItems = [
    {
      label: 'Finder',
    },
    {
      label: 'Edit',
    },
    {
      label: 'View',
    },
    {
      label: 'Go',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
