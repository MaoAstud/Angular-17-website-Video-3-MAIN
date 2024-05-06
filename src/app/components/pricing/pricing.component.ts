import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css'
})




export class PricingComponent {
 
  usuario = {
    nombre: "chinitolatino23",
    fechaRegistro: "30 de abril de 2024",
    personasQueSigue: 4,
    seguidos: [
      { nombre: "Seguido 1", bio: "Descripción del Seguido 1" },
      { nombre: "Seguido 2", bio: "Descripción del Seguido 2" },
      { nombre: "Seguido 3", bio: "Descripción del Seguido 3" },
      { nombre: "Seguido 4", bio: "Descripción del Seguido 4" }
    ],
    cambiarContrasena: false,
    cambiarEmail: false,
    nuevaContrasena: '',
    foto: "../assets/images/jw.jpg" // Ruta de la imagen de perfil del usuario
  };

  nuevoEmail: string = '';
  
  togglePasswordChange() {
    this.usuario.cambiarContrasena = !this.usuario.cambiarContrasena;
  }

  toggleEmailChange() {
    this.usuario.cambiarEmail = !this.usuario.cambiarEmail;
  }

  guardarNuevoEmail() {
    // Aquí puedes agregar la lógica para guardar el nuevo correo electrónico
    console.log("Nuevo correo electrónico guardado:", this.nuevoEmail);
    // También puedes reiniciar el formulario o realizar otras acciones necesarias
    this.nuevoEmail = ''; // Reiniciar el valor del input

    // Lógica para cargar los seguidores

  }

  guardarNuevaContrasena() {
    // Aquí puedes agregar la lógica para guardar la nueva contraseña
    // Por ejemplo, puedes llamar a un servicio que maneje la lógica de guardar en la base de datos
    
    // Suponiendo que tienes un servicio llamado authService que maneja la autenticación y cambio de contraseña
    // Puedes reemplazar esta parte de código si más adelante decides implementar un servicio de autenticación
    console.log("Nueva contraseña guardada exitosamente");
  
    // También puedes reiniciar el formulario o realizar otras acciones necesarias
    this.usuario.nuevaContrasena = ''; // Reiniciar el valor del input de nueva contraseña
  }

  // Método para cargar los seguidores
  // Método para cargar los seguidores


}
