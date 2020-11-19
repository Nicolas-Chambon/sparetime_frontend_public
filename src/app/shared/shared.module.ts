import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material.module';
import { EventCardComponent } from './event-card/event-card.component';
import { FlexModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { EventModalComponent } from './event-card/event-modal/event-modal.component';

@NgModule({
  declarations: [LayoutComponent, EventCardComponent, EventModalComponent],
  imports: [CommonModule, MaterialModule, FlexModule, RouterModule],
  exports: [LayoutComponent, MaterialModule, EventCardComponent],
})
export class SharedModule {}
