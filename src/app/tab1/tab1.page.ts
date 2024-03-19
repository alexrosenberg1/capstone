import { Component, ViewChild } from '@angular/core';
import { CarService } from '../services/car.service';
import { Icar } from '../interfaces/icar';
import { FavouritesService } from '../services/favourites.service';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  cars: Icar[] = [];
  searchTerm: string = '';
  isDetailsModalOpen: boolean[] = [];
  isRentalModalOpen: boolean[] = [];

  showFilter = false;
  selectedType: string = '';
  selectedGas: string = '';
  selectedYear: string = '';
  filteredCars: Icar[] = [];

  constructor(
    private carService: CarService,
    public favouritesService: FavouritesService
  ) {
    this.carService.getCars().subscribe(result => {
      this.cars = result;
      this.isDetailsModalOpen = Array(this.cars.length).fill(false);
      this.isRentalModalOpen = Array(this.cars.length).fill(false);
      this.filteredCars = this.cars;
    });
  }

  toggleFilter() {
    this.showFilter = !this.showFilter;
  }

  applyFilter() {
    this.filteredCars = this.cars.filter((car) => {
      return (
        (!this.selectedType || car.carType === this.selectedType) &&
        (!this.selectedGas || car.gasType === this.selectedGas) &&
        (!this.selectedYear || car.year === this.selectedYear)
      );
    });

    this.showFilter = false;
  }

  resetFilter() {
    this.selectedType = '';
    this.selectedGas = '';
    this.selectedYear = '';
    this.filteredCars = this.cars;
    this.showFilter = false;
  }

  toggleFavourite(car: Icar): void {
    if (this.favouritesService.isFavourite(car)) {
      this.favouritesService.removeFavourite(car);
    } else {
      this.favouritesService.addFavourites(car);
    }
  }

  openDetailsModal(index: number): void {
    this.isDetailsModalOpen[index] = true;
  }

  closeDetailsModal(index: number): void {
    this.isDetailsModalOpen[index] = false;
  }

  setRentalModalOpen(index: number, isOpen: boolean): void {
    this.isRentalModalOpen[index] = isOpen;
  }

  onSearchChange(event: CustomEvent): void {
    this.searchTerm = event.detail.value || '';
    this.filterCars();
  }

  filterCars(): void {
    this.filteredCars = this.cars.filter((car) => {
      return (
        (!this.selectedType || car.carType === this.selectedType) &&
        (!this.selectedGas || car.gasType === this.selectedGas) &&
        (!this.selectedYear || car.year === this.selectedYear) &&
        
        (car.year.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.brand.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.carType.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.addFeat.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.nDoors.toString().toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.nSeats.toString().toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          car.gasType.toLowerCase().includes(this.searchTerm.toLowerCase())
        )
      );
    });
  }
}