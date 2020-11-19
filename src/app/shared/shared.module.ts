import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { MaterialModule } from './material.module';
import { EventCardComponent } from './event-card/event-card.component';
import { FlexModule } from "@angular/flex-layout";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LayoutComponent, EventCardComponent],
  imports: [CommonModule, MaterialModule, FlexModule, RouterModule],
  exports: [LayoutComponent, MaterialModule, EventCardComponent],
})
export class SharedModule {}
