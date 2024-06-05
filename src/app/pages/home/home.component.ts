import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ServiceService } from '../../shared/services/service.service';
import { Character, GetAllCharacters, infoPaginator } from '../../models/interfaces/CharactersInterface';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  private destroy$ = new Subject<void>()
  valueSearch: string = '';
  actualPage: boolean = false;

  constructor(
    private service: ServiceService
  ) {}

  characters: Array<Character> | undefined = []
  infoPaginator: infoPaginator = {
    count: 0,
    next: null,
    pages: 0,
    prev: null,
  }

  ngOnInit():void {
    this.getAllCharacters();
    this.actualPage = false
  }

  getAllCharacters() {
    this.service.getAllCharacters()
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.infoPaginator = response.info as infoPaginator
          this.characters = response.results
          this.valueSearch = ''
        },
        error: (err) => {
          console.log(err);
          this.characters = []
        }
      })
  }

  handleSearchCharacters(event: GetAllCharacters | null) {
    if(!event) {
      this.getAllCharacters()
      this.actualPage = true
      setTimeout(() => {
        this.actualPage = false
      }, 400);
    }

    if(event) {
      
      this.infoPaginator = event.info as infoPaginator
      this.characters = event.results
      this.actualPage = true
      setTimeout(() => {
        this.actualPage = false
      }, 400);
    }

    
  }

  handleValueSearch(event: string) {
    this.valueSearch = event
  }

  handleCharacterListPaginator(event: number) {
    this.service.getAllCharactersPerPage(event, this.valueSearch)
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe({
        next: (response) => {
          this.infoPaginator = response.info as infoPaginator
          this.characters = response.results
          window.scrollTo(0, 0);

        },
        error: (err) => {
          console.log(err);
          this.characters = []
        }
      })
    
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
