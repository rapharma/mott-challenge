import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { ButtonFavoriteComponent } from './components/button-favorite/button-favorite.component';
import { CardCharacterComponent } from './components/card-character/card-character.component';
import { CharactersListComponent } from './components/characters-list/characters-list.component';
import { EmptyPageComponent } from './components/empty-page/empty-page.component';
import { FavoriteListComponent } from './components/favorite-list/favorite-list.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    MatInputModule,
  ],
  exports: [
    EmptyPageComponent,
    HeaderComponent,
    SearchComponent,
    CharactersListComponent,
    FavoriteListComponent,
    CardCharacterComponent
  ],
  declarations: [
    EmptyPageComponent,
    CharactersListComponent,
    FavoriteListComponent,
    HeaderComponent,
    SearchComponent,
    ButtonFavoriteComponent,
    CardCharacterComponent
  ],
  providers: [],
})
export class SharedModule { }
