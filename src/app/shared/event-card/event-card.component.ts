import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss'],
})
export class EventCardComponent implements OnInit {
  @Input() shortName: string;
  @Input() companyName: string;
  @Input() date: string;

  @Input() imageUrl: string;

  @Input() facebookUrl: string;
  @Input() twitterUrl: string;
  @Input() instagramUrl: string;

  constructor() {}

  ngOnInit(): void {}
}
