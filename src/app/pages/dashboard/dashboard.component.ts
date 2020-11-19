import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "../../core/services/authentication.service";
import { Router } from "@angular/router";
import { EventsService } from "../../core/services/events.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private eventsService: EventsService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      await this.router.navigate(['/login']);
    }
    this.eventsService.trendingEvents().subscribe(data => console.log(data));
  }

}
