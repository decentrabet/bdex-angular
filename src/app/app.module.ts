import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule } from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatToolbarModule, MatToolbarRow } from  '@angular/material/toolbar';
import { CanActivateChild, RouterModule } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import { DatePipe } from '@angular/common';
import {MatTreeModule} from '@angular/material/tree';
import {MatStepperModule} from '@angular/material/stepper';
import {MatChipsModule} from '@angular/material/chips';
import {MatRadioModule} from '@angular/material/radio';
import { HeaderComponent } from './component/header/header.component';
import { HomeComponent } from './component/home/home.component';
import { CompetitionComponent } from './component/competition/competition.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CompetitionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatDividerModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatListModule,
    HttpClientModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatTableModule,
    MatTreeModule,
    MatStepperModule,
    MatRadioModule,
    MatChipsModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
