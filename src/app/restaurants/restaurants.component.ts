import { Component, OnInit } from '@angular/core';

import {trigger, state, style, transition, animate} from '@angular/animations'
import {FormBuilder, FormControl, FormGroup} from '@angular/forms'


import { Restaurant } from './restaurant/restaurant.model';
import { RestaurantsService} from './restaurants.service';

import 'rxjs/add/operator/do'
import 'rxjs/add/operator/switchMap'
import 'rxjs/add/operator/debounceTime'
import 'rxjs/add/operator/distinctUntilChanged'

@Component({
  selector: 'mt-restaurants',
  templateUrl: './restaurants.component.html',
  animations: [
    trigger('toggleSearch1', [
      state('hidden', style({
        opacity: 0,
        "max-height": "0px",
      })),
      state ('visible', style({
        opacity: 1,
        "max-height": "70px",
        "margin-top": "20px"
      })),
      transition ('* => *', animate('250ms 0s ease-in-out'))
    ])
  ]
})

export class RestaurantsComponent implements OnInit {

  searchBarState = 'hidden'
  //referente ao tipo Restaurant criado no model.
  restaurants1: Restaurant[]

  searchForm: FormGroup
  searchControl: FormControl


  constructor(private restaurantsService: RestaurantsService,
              private fb: FormBuilder) { }

  ngOnInit() {

    this.searchControl = this.fb.control('')
    this.searchForm = this.fb.group({
      searchControl: this.searchControl
    })

    this.searchControl.valueChanges
    .debounceTime(500)
    .distinctUntilChanged()
    .switchMap(searchTerm =>
      this.restaurantsService.restaurants2(searchTerm))
    .subscribe(restaurants3 =>this.restaurants1 = restaurants3)

    this.restaurantsService.restaurants2()
    .subscribe(restaurants3 => this.restaurants1 = restaurants3)
  }

  toggleSearch(){
    this.searchBarState = this.searchBarState === 'hidden' ? 'visible' : 'hidden'
  }



}
