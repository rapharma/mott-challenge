import { Component, Input } from '@angular/core';
import { Character } from '../../../models/interfaces/CharactersInterface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrl: './card-character.component.scss'
})
export class CardCharacterComponent {
  @Input() name: string = ''
  @Input() character: Character = {
    name: '',
  }
}
