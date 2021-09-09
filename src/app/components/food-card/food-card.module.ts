import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FoodCardComponent } from './food-card.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [FoodCardComponent],
    declarations: [FoodCardComponent],
})
export class FoodCardModule { }
