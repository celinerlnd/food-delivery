import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
    providedIn: 'root'
})

export class FoodService {
    constructor() { }
    getFoods(): Food[]{
        return[{
            id: 1,
            title: 'Seafood',
            price: 12,
            image: 'assets/images/foods/seafood-dishes.png',
            description: 'In Addition blabla klwjkflejl',
        },
        {
            id: 2,
            title: 'Hamburger',
            price: 21,
            image: 'assets/images/foods/hamburger.png',
            description: 'In Addition blabla',

        },
        {
            id: 3,
            title: 'Mussels',
            price: 16,
            image: 'assets/images/foods/mussel.png',
            description: 'In Addition blabla',

        },
        {
            id: 4,
            title: 'Tambi',
            price: 28,
            image: 'assets/images/foods/tambi.png',
            description: 'In Addition blabla',

        },
        ];
    }

    getFood(id: number): Food{
        return this.getFoods().find((food)=> food.id === id);
    }
}
