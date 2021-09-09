import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from './badge.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [BadgeComponent],
    declarations: [BadgeComponent],
})
export class BadgeModule { }
