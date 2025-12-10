import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-error',
  imports: [RouterLink],
  templateUrl: './error.html',
  styleUrl: './error.scss'
})
export class ErrorComponent implements OnInit {
  private http = inject(HttpClient);

  isLoading = signal(true);
  errorCode = signal(0);
  errorMessage = signal('');
  errorDetails = signal('');

  ngOnInit() {
    // Appel à une URL qui retourne une erreur 404
    this.http.get('https://jsonplaceholder.typicode.com/posts/99999999').subscribe({
      next: () => {
        this.isLoading.set(false);
      },
      error: (error: HttpErrorResponse) => {
        this.isLoading.set(false);
        this.errorCode.set(error.status);
        this.errorMessage.set(error.statusText || 'Erreur inconnue');
        this.errorDetails.set(error.message);
      }
    });
  }
}

