import { FoodCardModule } from './../components/food-card/food-card.module';
import { FoodCardComponent } from './../components/food-card/food-card.component';
import { SearchbarModule } from './../components/searchbar/searchbar.module';
import { SearchbarComponent } from './../components/searchbar/searchbar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { CategoryItemModule } from '../components/category-item/category-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    CategoryItemModule,
    FoodCardModule,
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
