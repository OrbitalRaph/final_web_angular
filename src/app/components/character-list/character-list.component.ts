import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { Character } from '../../models/character';
import { Filters } from '../../filters';;

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private personnageService: PersonnageService) { }

  elements = Filters.ELEMENTS;
  weapons = Filters.WEAPONS;
  rarities = Filters.RARITIES;

  filters = {
    element: '',
    weapon: '',
    rarity: ''
  };

  characters: Character[] = [];

  getCharacters(): void {
    this.personnageService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  formatBirthday(birthday: string): string {
    return birthday.slice(5, 7) + '/' + birthday.slice(8, 10);
  }

  ngOnInit(): void {
    this.getCharacters();
  }

  getFilteredCharacters(): Character[] {
    this.personnageService.getFilteredCharacters(this.filters.element, this.filters.weapon, this.filters.rarity)
      .subscribe(characters => this.characters = characters);
    return this.characters;
  }

  onElementFilterChange(element: string): void {
    this.filters.element = element;
    this.getFilteredCharacters();
  }

  onWeaponFilterChange(weapon: string): void {
    this.filters.weapon = weapon;
    this.getFilteredCharacters();
  }

  onRarityFilterChange(rarity: string): void {
    this.filters.rarity = rarity;
    this.getFilteredCharacters();
  }

  deleteCharacter(character : Character): void {
    this.personnageService.deleteCharacter(character).subscribe(
      () => this.characters = this.characters.filter(c => c !== character)
      );
  }
}
