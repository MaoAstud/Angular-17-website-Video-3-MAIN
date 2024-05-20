import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router'
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NavComponent } from './components/nav/nav.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgModule } from '@angular/core';
import { ComponentModule } from './components/component.module';
import { HttpClient } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, HeaderComponent, AboutComponent,
  ClientsComponent, PricingComponent, TestimonialsComponent, 
  GalleryComponent, NavComponent, ServicesComponent, FooterComponent,ToastrModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  constructor(private httpClient: HttpClient, private toastrModule:ToastrModule){}
  title = 'website';
}

