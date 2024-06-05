import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character, GetAllCharacters } from '../../models/interfaces/CharactersInterface';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {}

  private API_URL = 'https://rickandmortyapi.com/api'
  
  getAllCharacters(): Observable<GetAllCharacters> {
    return this.http.get<GetAllCharacters>(`${this.API_URL}/character`)
  }

  getAllCharactersPerPage(page: number, character?:string): Observable<GetAllCharacters> {
    return this.http.get<GetAllCharacters>(`${this.API_URL}/character/?page=${page}&name=${character}`)
  }

  searchCharacter(name: string, page?: number,): Observable<Character> {
    return this.http.get<Character>(`${this.API_URL}/character?name=${name}&page=${page ? page : 1}`) 
  }
}
