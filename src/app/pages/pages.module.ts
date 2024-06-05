import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { routes } from './pages.routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    HomeComponent,
    FavoritesComponent,
    PageNotFoundComponent
  ],
})
export class PagesModule { }
