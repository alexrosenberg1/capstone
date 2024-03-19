import { Injectable } from '@angular/core';
import { Icar } from '../interfaces/icar';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  private favourites: Icar[] = [];

  getFavourites(): Icar[] {
    return this.favourites;
  }

  addFavourites(car: Icar) {
    if(!this.isFavourite(car)) {
      this.favourites.push(car);
    }
  }

  removeFavourite(car: Icar) {
    this.favourites = this.favourites.filter((fav) => fav.id !== car.id);
  }

  isFavourite(car: Icar): boolean {
    return this.favourites.some((fav) => fav.id === car.id);
  }

  constructor() { }
}
