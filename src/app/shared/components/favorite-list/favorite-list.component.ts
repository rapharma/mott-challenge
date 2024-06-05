import { Component, Input } from '@angular/core';
import { Character } from '../../../models/interfaces/CharactersInterface';


@Component({
  selector: 'app-favorite-list',
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.scss'
})
export class FavoriteListComponent {
  @Input() favoriteList : Array<Character> = []
}
