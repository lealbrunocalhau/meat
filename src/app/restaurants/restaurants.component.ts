import { Component, OnInit } from '@angular/core';
import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService} from './restaurants.service';

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html'
})
export class RestaurantsComponent implements OnInit {




//referente ao tipo Restaurant criado no model.
  restaurants1: Restaurant[]

  bruno: string = 'testando'
  constructor(private restaurantsService: RestaurantsService) { }

  ngOnInit() {
    this.restaurantsService.restaurants2()
    .subscribe(restaurants3 => this.restaurants1 = restaurants3)
  }
}
