import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
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
