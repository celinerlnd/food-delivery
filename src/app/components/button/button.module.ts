import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';

@NgModule({
    imports: [CommonModule, IonicModule],
    exports: [ButtonComponent],
    declarations: [ButtonComponent],
})
export class ButtonModule { }
