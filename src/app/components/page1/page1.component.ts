import { Component, OnInit } from '@angular/core';
import { FoodItem } from 'src/app/model/food';
import { Service1Service } from 'src/app/services/service1.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {

  constructor(public svc: Service1Service) { }

  foodItems: FoodItem[] = [];

  ngOnInit() {
    this.loadFoods();
  }

  loadFoods() {
    this.svc.getFoods().subscribe(data => {
      //console.log(data);
      this.foodItems = data;
      console.log(this.foodItems);
      //this.isLoading = false;

    });
  }
}
