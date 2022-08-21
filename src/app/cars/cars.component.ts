import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent {

  carName: string = '';
  carYear: number = 2017;

  cars: { name: string, year: number }[] = [{
    name: 'Ford',
    year: 2020
    }, {
    name: 'Mazda',
      year: 2018
    }, {
    name: 'Tesla',
      year: 2010
    }, {
    name: 'Audi',
      year: 2008
    }];
  
  addCar() {
    this.cars.push({
      name: this.carName,
      year: this.carYear
    })

    this.carName = ''
    this.carYear = 2017;
  }
}
