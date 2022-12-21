import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character';
import { PersonnageService } from '../../services/personnage.service';
import { Filters } from '../../filters';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-character-modify-form',
  templateUrl: './character-modify-form.component.html',
  styleUrls: ['./character-modify-form.component.css']
})
export class CharacterModifyFormComponent implements OnInit {

  constructor(private personnageService: PersonnageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  id: string = '';

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getCharacter();
  }

  elements = Filters.ELEMENTS;
  weapons = Filters.WEAPONS;
  rarities = Filters.RARITIES;

  character: Character = {
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
    constellation: '',
    constellations: [],
    passives: [],
    skills: []
  };

  getCharacter(): void {
    this.personnageService.getCharacter(this.id)
      .subscribe(character => this.character = character);
  }

  updateCharacter(form: NgForm): void {
    this.personnageService.updateCharacter(this.character).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/personnages']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
