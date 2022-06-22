import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { CardsComponent } from './pages/cards/cards.component'
import { FavoritesComponent } from './pages/favorites/favorites.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: '**', redirectTo: 'cards' }
    ],
  },
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
