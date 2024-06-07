import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, GetAllCharacters } from '../../models/interfaces/CharactersInterface';

export abstract class CharacterRepository {
  abstract getAllCharacters(): Observable<GetAllCharacters>;
  abstract getAllCharactersPerPage(page: number, character?: string): Observable<GetAllCharacters>;
  abstract searchCharacter(name: string, page?: number): Observable<Character>;
}

@Injectable({
  providedIn: 'root'
})

export class ApiCharacterRepository extends CharacterRepository {

  private API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {
    super();
  }

  getAllCharacters(): Observable<GetAllCharacters> {
    return this.http.get<GetAllCharacters>(`${this.API_URL}/character`);
  }

  getAllCharactersPerPage(page: number, character?:string): Observable<GetAllCharacters> {
    return this.http.get<GetAllCharacters>(`${this.API_URL}/character/?page=${page}&name=${character}`)
  }

  searchCharacter(name: string, page?: number,): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/character?name=${name}&page=${page ? page : 1}`) 
  }

}
