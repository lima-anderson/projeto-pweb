import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {RouterModule} from "@angular/router";
import { MainComponent } from './main/main.component';



@NgModule({
    declarations: [
        MenuComponent,
        MainComponent
    ],
    exports: [
        MenuComponent
    ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule
  ]
})
export class LayoutModule { }
