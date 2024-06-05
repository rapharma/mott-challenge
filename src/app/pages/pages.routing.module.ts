import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { FavoritesComponent } from "./favorites/favorites.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";


export const routes: Routes =[
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'favorites', 
    component: FavoritesComponent
  },
  { path: '**', component: PageNotFoundComponent },
]

