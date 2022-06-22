import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { CardsComponent } from './pages/cards/cards.component'
import { FavoritesComponent } from './pages/favorites/favorites.component'

import { AngularMaterialModule } from '../angular-material/angular-material.module';


@NgModule({
  declarations: [
    CardsComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule
  ]
})
export class UsersModule { }
