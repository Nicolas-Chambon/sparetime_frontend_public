import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule, MatIconRegistry } from "@angular/material/icon";
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';
import { PortalModule } from '@angular/cdk/portal';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from "@angular/material/tabs";
import { DomSanitizer } from "@angular/platform-browser";

const MATERIAL = [
  MatSnackBarModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatFormFieldModule,
  MatInputModule,
  MatRadioModule,
  MatExpansionModule,
  MatCheckboxModule,
  MatSliderModule,
  MatAutocompleteModule,
  MatDatepickerModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatBadgeModule,
  MatCardModule,
  MatChipsModule,
  MatTableModule,
  MatTabsModule,
  PortalModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule, ...MATERIAL],
  exports: MATERIAL,
})
export class MaterialModule {
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'partying-face',
      sanitizer.bypassSecurityTrustResourceUrl('assets/partying-face.svg'));
    iconRegistry.addSvgIcon(
      'horns-sign',
      sanitizer.bypassSecurityTrustResourceUrl('assets/horns-sign.svg'));
  }
}
