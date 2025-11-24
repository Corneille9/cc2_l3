import { Component } from '@angular/core';

@Component({
  selector: 'app-profil',
  imports: [],
  templateUrl: './profil.html',
  styleUrl: './profil.scss'
})
export class ProfilComponent {
  user = {
    name: 'Jean Dupont',
    email: 'jean.dupont@example.com',
    role: 'Développeur',
    joined: 'Septembre 2025',
    bio: 'Développeur passionné par les technologies web modernes.'
  };
}

