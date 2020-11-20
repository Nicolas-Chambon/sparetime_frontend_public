import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../core/services/authentication.service';
import { Router } from '@angular/router';
import { EventsService } from '../../core/services/events.service';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  trendingEvents$: Observable<any>;
  userEvent$: Observable<any>;

  trendingEvents: any;
  userEvent: any;

  trendingEventsLoaded: boolean;
  userEventLoaded: boolean;

  slides = [];

  constructor(
    private authService: AuthenticationService,
    private eventsService: EventsService,
    private router: Router,
  ) {}

  async ngOnInit(): Promise<void> {
    if (!this.authService.isAuthenticated()) {
      await this.router.navigate(['/login']);
    }
    this.userEvent$ = this.eventsService.userEvent().pipe(first());
    this.trendingEvents$ = this.eventsService.trendingEvents().pipe(first());

    this.userEvent$.subscribe((data: any) => {
      this.userEvent = data;
      this.slides.push({ image: this.userEvent.picture1 });
      this.slides.push({ image: this.userEvent.picture2 });
      this.slides.push({ image: this.userEvent.picture3 });
      this.userEventLoaded = true;
    });

    this.trendingEvents$.subscribe((data: any[]) => {
      const trendingEvents = [];
      const keys = Object.keys(data).sort((a, b) => a-b).reverse();
      for (const key in keys){
        trendingEvents[key] = data[keys[key]];
      }

      this.trendingEvents = trendingEvents;
      this.trendingEventsLoaded = true;
    });
  }
}
