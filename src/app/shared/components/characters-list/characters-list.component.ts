import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Character, infoPaginator, pagePaginator } from '../../../models/interfaces/CharactersInterface';


@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss'
})


export class CharactersListComponent implements OnChanges {
  @Input() charactersList : Array<Character> = []
  @Input() infoPaginator : infoPaginator = {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  }
  @Input() returnStart : boolean = false
  @Output() pageSelector = new EventEmitter<number>();

  selectedPaginator: number = 1;

  ngOnChanges(): void {
    setTimeout(() => {
      if(this.returnStart) {
        this.selectedPaginator = 1
      }
    }, 100);
  }

  handleSelectedPaginator(event: pagePaginator) {

    this.selectedPaginator = event.page
    this.pageSelector.emit(event.page)
  }
}
