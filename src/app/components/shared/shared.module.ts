import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos PRIME
import {MenubarModule} from 'primeng/menubar';
import {ImageModule} from 'primeng/image';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    ImageModule,
    ButtonModule
    
  ],
  exports: [
    MenubarModule,
    ImageModule,
    ButtonModule
  ]
})
export class SharedModule { }
