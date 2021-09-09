import { Category } from './../../models/category.model';
import { Component, Input, OnInit } from '@angular/core';
import { IonMenuToggle } from '@ionic/angular';

@Component({
  selector: 'app-category-item',
  templateUrl: './category-item.component.html',
  styleUrls: ['./category-item.component.scss'],
})
export class CategoryItemComponent {

 @Input() item: Category;
}
