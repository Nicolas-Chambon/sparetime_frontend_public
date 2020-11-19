import { Component, Input, OnInit } from '@angular/core';
import { Event } from 'src/models/event';
import { MatDialog } from '@angular/material/dialog';
import { EventModalComponent } from './event-modal/event-modal.component';
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

  @Input() duration: string;
  @Input() title: string;
  @Input() type: string;
  @Input() dateEvent: string;
  @Input() city: string;
  @Input() address: string;

  @Input() event: any;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  onSelectEvent() {
    this.dialog.open(EventModalComponent, {
      maxWidth: '600px',
      maxHeight: '90%',
      width: '90%',
      data: {
        event: this.event,
      },
      panelClass: 'event-card-dialog-container',
    });
  }
}
