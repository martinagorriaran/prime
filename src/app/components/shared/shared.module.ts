import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modulos PRIME
import {MenubarModule} from 'primeng/menubar';
;


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenubarModule,
    
  ],
  exports: [
    MenubarModule,
    
  ]
})
export class SharedModule { }
