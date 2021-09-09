import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { CategoryItemComponent } from './category-item.component';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [CategoryItemComponent],
    imports: [CommonModule,IonicModule],
    exports: [CategoryItemComponent],
})

export class CategoryItemModule{}
