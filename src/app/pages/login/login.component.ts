import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    if (this.authService.isAuthenticated()) {
      await this.router.navigate(['/dashboard']);
    }
  }

  async loginFacebook(): Promise<void> {
    this.authService.login('michel_dupont', 'Arles').subscribe(
      async data => {
        if (data?.id) {
          await this.router.navigate(['/dashboard']);
        }
      }
    );
  }

}
