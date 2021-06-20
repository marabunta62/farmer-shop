import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelpModalPage } from 'src/app/pages/help-modal/help-modal.page';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  // Gestion de la SearchModalPage
  async showHelpModal() {
    const profileModal = await this.modalCtrl.create({
      component: HelpModalPage,
      cssClass: 'help-modal',
    });

    return (await profileModal).present();
  }

}
