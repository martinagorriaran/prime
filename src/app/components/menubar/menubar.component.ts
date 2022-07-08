import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent implements OnInit {
  
  menuItems:MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menuItems = [
      {
        label: 'primerp',
        routerLink:"primerp",
      },
      {
        label: 'segundp',
        routerLink:'segundp'
      },
      {
        label: 'tercerp',
        routerLink: 'tercerp'
      },
      {
        label: 'Go',
      },
    ]

  }

}
