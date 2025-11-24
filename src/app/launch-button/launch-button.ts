import {Component, OnInit, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-launch-button',
  imports: [CommonModule],
  templateUrl: './launch-button.html',
  styleUrl: './launch-button.scss',
})
export class LaunchButton implements OnInit {
  result: any = null;
  loading = signal(true);

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.onLaunch();
  }

  onLaunch(): void {
    this.loading.set(true);
    this.http.get('https://jsonplaceholder.typicode.com/users/1')
      .subscribe({
        next: async (data) => {
          await new Promise(resolve => setTimeout(resolve, 1000));
          this.result = data;
          this.loading.set(false);
          console.log('Résultat:', data);
        },
        error: (err) => {
          console.error(err);
          this.loading.set(false);
        }
      });
  }
}
