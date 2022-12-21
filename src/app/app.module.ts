import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EnteteComponent } from './components/entete/entete.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { PiedDePageComponent } from './components/pied-de-page/pied-de-page.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MatToolbarModule}  from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { StatsComponent } from './components/stats/stats.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { CharacterAddFormComponent } from './components/character-add-form/character-add-form.component';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { CharacterModifyFormComponent } from './components/character-modify-form/character-modify-form.component';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    CharacterListComponent,
    PiedDePageComponent,
    AccueilComponent,
    StatsComponent,
    CharacterAddFormComponent,
    CharacterModifyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatExpansionModule,
    MatListModule,
    HttpClientModule,
    MatButtonToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
