import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { ServiceService } from '../../services/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {

  search = new FormControl ('');
  @Output() emitSearchCharacters = new EventEmitter
  @Output() emitValueSearch = new EventEmitter

  constructor(private service:ServiceService) {}

  searchCharacter() {
    const searchCharacter = this.search.value as string;
    if(searchCharacter.length > 3) {
      this.service.searchCharacter(searchCharacter)
        .subscribe({
          next: (response) => {
            this.emitSearchCharacters.emit(response)
            this.emitValueSearch.emit(searchCharacter)
          },
          error: () => {
            this.emitSearchCharacters.emit([])
          }
        })
    }

    if(searchCharacter === '') {
      this.emitSearchCharacters.emit(null)
    }
  }

}
