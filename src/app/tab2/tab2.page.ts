import { Component } from '@angular/core';
import { FavouritesService } from '../services/favourites.service';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  isDetailsModalOpen: boolean[] = Array(100).fill(false);
  constructor(public favouritesService: FavouritesService, private modalController: ModalController) {}

  showDetails(car: any, index: number) {
    this.isDetailsModalOpen[index] = true;
  }

  closeDetailsModal(index: number) {
    this.isDetailsModalOpen[index] = false;
  }
}