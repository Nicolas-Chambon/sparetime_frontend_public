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

  event: any[] = [];

  constructor() {}

  ngOnInit(): void {}

  onSelectEvent() {
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
