import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Character } from '../../../models/interfaces/CharactersInterface';
import { IAppState } from '../../../store/app.state';
import { addList, removeList } from '../../../store/actions';

@Component({
  selector: 'app-button-favorite',
  templateUrl: './button-favorite.component.html',
  styleUrl: './button-favorite.component.scss',
})
export class ButtonFavoriteComponent implements OnInit  {

  
  @Input() characterData: Character = {
    name: ''
  }
  @Output() selectedChange = new EventEmitter<boolean>();

  favoriteList$: Observable<Array<Character>>;
  favoriteList: Array<Character> = []

  constructor(private store:Store<{app:IAppState}>) {
    this.favoriteList$ = this.store.select('app', 'favoriteList')
  }

  @Input() selected: boolean = false;

  toggleSelected() {
    this.selected = !this.selected;
    if(this.selected) {
      this.addFavorite()
    } else {
      this.removeFavorite()
    }
    this.selectedChange.emit(this.selected)
  }

  ngOnInit() {
    this.favoriteList$.subscribe(data => {
      this.favoriteList = data
      if(data.length > 0) {
        const validate = this.favoriteList.find(f => f.id === this.characterData.id)
        if(validate) {
          this.selected = true
        } 
      }
    })


  }

  addFavorite() {
    this.store.dispatch(addList(this.characterData))
  }

  removeFavorite() {
    this.store.dispatch(removeList(this.characterData))
  }

}
