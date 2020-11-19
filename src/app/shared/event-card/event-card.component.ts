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
    console.log(this.event);

    this.dialog.open(EventModalComponent, {
      maxWidth: '50%',
      maxHeight: '50%',
      width: '50%',
      height: '50%',
      data: {
        adress: this.dateEvent,
        shortName: this.shortName,
        event: this.event,
      },
    });

    // this.selectedEvent = event;
    // this.dialog.open(eventDialogComponent, {
    //   maxWidth:'50%',
    //   maxHeight:'50%',
    //   width:'50%',
    //   height:'50%',
    //   data:{
    //     'event' : this.selectedEvent
    //   },
    // })
    //  Donc ça c'est pour lancer la modal
    //  Tu créer le composant de la modal à l'interrieur de celui la, et dans les parametre du constructeur tu met ça
    //  @Inject(MAT_DIALOG_DATA) public data: any
  }
}
