import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';

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


