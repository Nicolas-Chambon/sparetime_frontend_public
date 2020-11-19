import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ExtendedModule, FlexModule, GridModule } from '@angular/flex-layout';
import { MatCarouselModule } from '@ngmodule/material-carousel';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    MatCarouselModule.forRoot(),

    FlexModule,
    GridModule,
    ExtendedModule,

    // Forms
    ReactiveFormsModule,

    // Routing
    PagesRoutingModule,
  ],
})
export class PagesModule {}
