import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CharacterListComponent } from './components/character-list/character-list.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'personnages', component: CharacterListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
