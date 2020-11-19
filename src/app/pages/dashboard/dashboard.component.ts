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

  userEvent: any;

  userEventLoaded: boolean;

  slides = [
    { image: 'https://farm9.staticflickr.com/8059/28286750501_dcc27b1332_h_d.jpg' },
    { image: 'https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg' },
    { image: 'https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg' },
    { image: 'https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg' },
    { image: 'https://farm6.staticflickr.com/5812/23394215774_b76cd33a87_h_d.jpg' },
  ];

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
      this.slides.push({ image: '' });
      this.userEventLoaded = true;
      console.log(this.userEvent);
    });
  }
}
