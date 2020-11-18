import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { EventCardComponent } from './event-card/event-card.component';

@NgModule({
  declarations: [LayoutComponent, EventCardComponent],
  exports: [LayoutComponent, EventCardComponent],
  imports: [CommonModule],
})
export class SharedModule {}
