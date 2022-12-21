import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PersonnageService {
  personnageUrl = 'http://localhost:3000/personnages';

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.personnageUrl);
  }

  getCharacter(id: string): Observable<Character> {
    const url = `${this.personnageUrl}/id/${id}`;
    return this.http.get<Character>(url);
  }

  addCharacter(character: Character): Observable<Character> {
    return this.http.post<Character>(this.personnageUrl, {
      name: character.name,
      title: character.title,
      description: character.description,
      weapon_type: character.weapon_type,
      element: character.element,
      affiliation: character.affiliation,
      region: character.region,
      rarity: character.rarity,
      birthday: character.birthday,
      constellation: character.constellation
    }, httpOptions);
  }

  deleteCharacter(character: Character): Observable<Character> {
    const url = `${this.personnageUrl}/${character._id}`;
    return this.http.delete<Character>(url, httpOptions);
  }

  updateCharacter(character: Character): Observable<any> {
    const url = `${this.personnageUrl}/${character._id}`;
    return this.http.put(url, character, httpOptions);
  }

  getFilteredCharacters(element: string, weapon_type: string, rarity: string): Observable<Character[]> {
    // check if the parameters are empty, if so, remove them from the query
    let query = '';
    if (element !== '') {
      query += `element=${encodeURIComponent(element)}`;
    }
    if (weapon_type !== '') {
      if (query !== '') {
        query += '&';
      }
      query += `weapon_type=${encodeURIComponent(weapon_type)}`;
    }
    if (rarity !== '') {
      if (query !== '') {
        query += '&';
      }
      query += `rarity=${encodeURIComponent(rarity)}`;
    }
    if (query !== '') {
      query = '?' + query;
    }
    const url = `${this.personnageUrl}/filters${query}`;
    return this.http.get<Character[]>(url);
  }
}
