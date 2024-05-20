import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { ComponentModule } from '../component.module';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ReactiveFormsModule,
    HttpClientModule
    ],
  providers: [ComponentModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  registrationForm: FormGroup;
  loginForm: FormGroup;
  showChannelFields: boolean = false;
  showLoginFields: boolean = false; 
  
  constructor(private formBuilder: FormBuilder, private router: Router,private apiService: ApiService) {
    this.registrationForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      isCreator: [false],
      channelName: [''],
      channelDescription: ['']
    });
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  showRegister = true;
  toggleChannelFields() {
    this.showChannelFields = !this.showChannelFields;
  }

  submitForm() {
    console.log('Submitted!');
    console.log('Form Value:', this.registrationForm.value);
  }

  submitLoginForm() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.apiService.iniciarSesion({email, contrasena: password}).subscribe(response => {
        console.log('Inicio Sesión:', response); 
        if (response.usuario) {
          localStorage.setItem('currentUser', JSON.stringify(response.usuario));
          this.router.navigate(['/services']);
        } else {
          // Mensaje de error si las credenciales son incorrectas
          alert(response.message);
        }
      });
    }
  }

  submitRegisterForm() {
    if (this.registrationForm.valid) {
      const email = this.registrationForm.value.email;
      const nombreUsuario = this.registrationForm.value.username;
      const password = this.registrationForm.value.password;
      const nombreCanal = this.registrationForm.value.channelName;
      const descripcionCanal = this.registrationForm.value.channelDescription;
      this.apiService.registro({nombreUsuario, email, contrasena: password}).subscribe(responseRegistro => {
        console.log('Registro:', responseRegistro); 
        if (this.showChannelFields) {
          this.apiService.creacionCanal({
            nombreCanal,
            descripcionCanal,
            billeteraCanal: "0x34f5377c143B7B61da5c7817Ba49b87e357Af74f",
            idUsuario: responseRegistro.usuario.idUsuario
        }).subscribe(responseCanal => {
          console.log('Canal nuevo:', responseCanal); 
        })
        }
        localStorage.setItem('currentUser', JSON.stringify(responseRegistro.usuario));
          this.router.navigate(['/services']);
      });
    }
  }

  showLogin() {
    this.showLoginFields = !this.showLoginFields;
    this.showChannelFields = false;
    this.showRegister = false;
  }
}
  
