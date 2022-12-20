import { Component, OnInit } from '@angular/core';
import { PersonnageService } from '../../services/personnage.service';
import { Character } from '../../models/character';
import { Constellation } from '../../models/constellation';
import { Attribute } from '../../models/attribute';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  constructor(private personnageService: PersonnageService) { }

  characters: Character[] = [];

  getCharacters(): void {
    this.personnageService.getCharacters()
      .subscribe(characters => this.characters = characters);
  }

  formatBirthday(birthday: string): string {
    // 0000-99-99 => 99/99
    return birthday.slice(5, 7) + '/' + birthday.slice(8, 10);
  }


  ngOnInit(): void {
    this.getCharacters();
  }


}
