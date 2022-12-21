import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { Character } from '../../models/character';
import { NgForm } from '@angular/forms';
import { Filters } from '../../filters';

@Component({
  selector: 'app-character-add-form',
  templateUrl: './character-add-form.component.html',
  styleUrls: ['./character-add-form.component.css']
})
export class CharacterAddFormComponent implements OnInit {

  elements = Filters.ELEMENTS;
  weapons = Filters.WEAPONS;
  rarities = Filters.RARITIES;

  newCharacter: Character = {
    _id: '',
    name: '',
    title: '',
    description: '',
    weapon_type: '',
    element: '',
    affiliation: '',
    region: '',
    rarity: 0,
    birthday: '',
    constellation: ''
  };

  constructor(private personnageService: PersonnageService) { }

  ngOnInit(): void {
  }

  addCharacter(form: NgForm): void {
    this.personnageService.addCharacter(this.newCharacter).subscribe(
      (response) => {
        console.log(response);
        form.reset();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
