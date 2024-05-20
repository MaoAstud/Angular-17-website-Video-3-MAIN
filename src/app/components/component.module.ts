import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GalleryComponent } from './gallery/gallery.component';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ToastrModule
  ],
  exports: [
    HttpClientModule,
    ToastrModule
  ]
})
export class ComponentModule { }