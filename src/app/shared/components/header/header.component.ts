import { Component, OnInit } from '@angular/core';
import { IAppState } from '../../../store/app.state';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Character } from '../../../models/interfaces/CharactersInterface';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  
})
export class HeaderComponent implements OnInit  {
  favoriteList$: Observable<Array<Character>>;
  favoriteList: Array<Character> = []
  counterFavorites: number = 0

  constructor(private store:Store<{app:IAppState}>) {
    this.favoriteList$ = this.store.select('app', 'favoriteList')
  }

  ngOnInit() {
    this.favoriteList$.subscribe(data => {
      this.favoriteList = data
      this.counterFavorites = this.favoriteList.length 
    })
  }
}
