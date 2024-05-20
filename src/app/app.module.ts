import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule
import { AppComponent } from './app.component';
import { ApiService } from './api.service';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [AppComponent,ApiService], 
  imports: [BrowserModule, HttpClientModule, ToastrModule.forRoot()], // Agrega HttpClientModule a los imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
