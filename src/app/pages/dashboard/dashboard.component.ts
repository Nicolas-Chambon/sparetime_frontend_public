import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";
import { Router } from "@angular/router";
import { EventsService } from "../../core/services/events.service";
import { Observable } from "rxjs";
import { first } from "rxjs/operators";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  trendingEvents$: Observable<any>;
  userEvent$: Observable<any>;

  constructor(
    private authService: AuthenticationService,
    private eventsService: EventsService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      await this.router.navigate(['/login']);
    }
    this.userEvent$ = this.eventsService.userEvent().pipe(first());
    this.trendingEvents$ = this.eventsService.trendingEvents().pipe(first());
  }

}
