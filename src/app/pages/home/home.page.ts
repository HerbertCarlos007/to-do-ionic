import { Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen: boolean = false
  constructor() {}
  
  setOpenModal() {
    this.isModalOpen = !this.isModalOpen
  }
  
  setCloseModal(): void {
    this.isModalOpen = !this.isModalOpen
  }
}
