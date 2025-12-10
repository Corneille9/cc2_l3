import { Component, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class RegisterComponent implements OnInit {
  private http = inject(HttpClient);

  // Form fields
  email = '';
  password = '';
  confirmPassword = '';
  nom = '';
  prenom = '';

  // State signals
  isLoading = signal(true);
  loadError = signal(false);
  isLoaded = signal(false);
  isSuccess = signal(false);

  // Validation errors
  errors = signal<{
    email?: string;
    password?: string;
    confirmPassword?: string;
    nom?: string;
    prenom?: string;
  }>({});

  ngOnInit() {
    this.http.get('https://jsonplaceholder.typicode.com/users/1').subscribe({
      next: async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.isLoading.set(false);
        this.isLoaded.set(true);
      },
      error: () => {
        this.isLoading.set(false);
        this.loadError.set(true);
      }
    });
  }

  validateForm(): boolean {
    const newErrors: {
      email?: string;
      password?: string;
      confirmPassword?: string;
      nom?: string;
      prenom?: string;
    } = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email) {
      newErrors.email = 'L\'email est requis';
    } else if (!emailRegex.test(this.email)) {
      newErrors.email = 'L\'email n\'est pas valide';
    }

    // Password validation (at least 8 chars with 1 digit)
    const passwordRegex = /^(?=.*\d).{8,}$/;
    if (!this.password) {
      newErrors.password = 'Le mot de passe est requis';
    } else if (!passwordRegex.test(this.password)) {
      newErrors.password = 'Le mot de passe doit contenir au moins 8 caractères et un chiffre';
    }

    // Confirm password validation
    if (!this.confirmPassword) {
      newErrors.confirmPassword = 'La confirmation du mot de passe est requise';
    } else if (this.password !== this.confirmPassword) {
      newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
    }

    // Nom validation
    if (!this.nom) {
      newErrors.nom = 'Le nom est requis';
    }

    // Prenom validation
    if (!this.prenom) {
      newErrors.prenom = 'Le prénom est requis';
    }

    this.errors.set(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  onSubmit() {
    if (this.validateForm()) {
      this.isSuccess.set(true);
    }
  }
}
