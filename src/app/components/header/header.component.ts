import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  header = {
    title: "XERATH LIVE",
    description: "STREAMING PLATFORM",
    url:"¡Sumérgete en la acción en vivo y sé parte de la experiencia sin límites!",
    buttontext:"Sign In"
  }

}
