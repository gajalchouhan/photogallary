import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ImageComponent } from './image/image.component';
import { BBRoutingModule } from './bb-routing.module';
import { FormsModule } from '@angular/forms';
import { BbService } from './bb.service';

@NgModule({
  declarations: [LoginComponent, ImageComponent],
  imports: [
    CommonModule,
    BBRoutingModule,
    FormsModule
  ],
  providers: [BbService]
})
export class BBModule { }
