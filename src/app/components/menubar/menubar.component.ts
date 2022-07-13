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
        label: 'MySOUI',
        routerLink: 'inicio'
      },
      {
        label: 'Trabajos',
        routerLink:"primerp",
      },
      {
        label: 'Servicios',
        routerLink:'segundp'
      },
      {
        label: 'Acerca',
        routerLink: 'tercerp'
      },
      {
        label: 'Contactanos',
        routerLink: 'cuartop'
      },
    ]

  }

}
