import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menu } from 'src/app/interfaces/menu';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class InicioComponent implements OnInit {
  menuItems:MenuItem[] = [];

  constructor() { 

   
  }

  cars:String[]=[

    
    "../../../assets/img/imgggg22.jfif",
    "../../../assets/img/imgggg.jpg",
    "../../../assets/img/imgggg22.jfif"
  ];

  /*text:String[]=[
    "dasadasfdsfds",
    "dffdgfdgfd",
    "gfdgfdgfd"

  ];

  nombre:String[]=[
    "carlos",
    "juan",
    "pepe",
  ];*/

  cartas:Object[] = [
    {
      text:"fsdfsd",
      nombre:"pepe",
    },
    {
      text:"fsdfds",
      nombre:"juan",
    },
    {
      text:"dsadasd",
      nombre:"mike",
    },
    {
      text:"fds",
      nombre:"msdadas",
    },
    {
      text:"dsadasd",
      nombre:"mike",
    },
    {
      text:"dsadasd",
      nombre:"mike",
    },

  ];

  

  ngOnInit(){

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


