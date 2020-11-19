import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  user$: Observable<any>;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.user$ = this.authService.me().pipe(first());
  }

  async logout(): Promise<void> {
    this.authService.logout();
    await this.router.navigate(['/login']);
  }

}
