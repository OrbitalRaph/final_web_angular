import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { StatsComponent } from './components/stats/stats.component';
import { CharacterAddFormComponent } from './components/character-add-form/character-add-form.component';
import { CharacterModifyFormComponent } from './components/character-modify-form/character-modify-form.component';

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'personnages', component: CharacterListComponent },
  { path: 'statistiques', component: StatsComponent },
  { path: 'personnages/add', component: CharacterAddFormComponent },
  { path: 'personnages/edit/:id', component: CharacterModifyFormComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
