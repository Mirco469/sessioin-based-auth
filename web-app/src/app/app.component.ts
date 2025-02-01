import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  doLogin() {
    this.http
      .get('http://localhost:3000/auth/login', { withCredentials: true })
      .subscribe((response) => console.log(response));
  }

  doServiceCall() {
    this.http
      .get('http://localhost:3000/auth/some-service', { withCredentials: true })
      .subscribe((response) => console.log(response));
  }

  doExternalServiceCall() {
    this.http
      .get('http://localhost:3001/some-ext-service', { withCredentials: true })
      .subscribe((response) => console.log(response));
  }

  doLogout() {
    this.http
      .get('http://localhost:3000/auth/logout', { withCredentials: true })
      .subscribe((response) => console.log(response));
  }
}
