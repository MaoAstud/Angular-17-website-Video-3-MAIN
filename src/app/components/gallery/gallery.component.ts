import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {

  registrationForm: FormGroup;
  loginForm: FormGroup;
  showChannelFields: boolean = false;
  showLoginFields: boolean = false;

  constructor(private formBuilder: FormBuilder, private router: Router) {
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

  toggleChannelFields() {
    this.showChannelFields = !this.showChannelFields;
  }

  submitForm() {
    console.log('Submitted!');
    console.log('Form Value:', this.registrationForm.value);
  }

  submitLoginForm() {
    console.log('Submitted Login!');
    console.log('Form Value:', this.loginForm.value);
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;

      // Verificar si el correo electrónico y la contraseña coinciden con los valores proporcionados
      if (email === 'alanis2barba@gmail.com' && password === '123456') {
        // Redirigir al usuario a la página de servicios
        this.router.navigate(['/services']);
      } else {
        // Mensaje de error si las credenciales son incorrectas
        alert('Correo electrónico o contraseña incorrectos. Inténtelo de nuevo.');
      }
    }
  }

  showLogin() {
    this.showLoginFields = true;
  }
}
  
