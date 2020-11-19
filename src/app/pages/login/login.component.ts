import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {
    this.authService.login("michel_dupont", "Arles").subscribe(result => console.log(result));
  }

}
