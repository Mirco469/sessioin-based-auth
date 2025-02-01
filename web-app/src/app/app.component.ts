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
    // TODO
    this.http
      .get('http://localhost:3000/auth/login')
      .subscribe((response) => console.log(response));
  }

  doServiceCall() {
    // TODO
  }

  doLogout() {
    // TODO
  }
}
