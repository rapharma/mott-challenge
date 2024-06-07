import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, GetAllCharacters } from '../../models/interfaces/CharactersInterface';
import { CharacterRepository } from './character.repository';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private characterRepository: CharacterRepository) {}
  
  getAllCharacters(): Observable<GetAllCharacters> {
    return this.characterRepository.getAllCharacters();
  }

  getAllCharactersPerPage(page: number, character?: string): Observable<GetAllCharacters> {
    return this.characterRepository.getAllCharactersPerPage(page, character);
  }

  searchCharacter(name: string, page?: number): Observable<Character> {
    return this.characterRepository.searchCharacter(name, page);
  }
}
