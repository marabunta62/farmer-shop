import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.page.html',
  styleUrls: ['./help-modal.page.scss'],
})
export class HelpModalPage implements OnInit {
  constructor(private viewCtrl: ModalController) { }

  ngOnInit() {
  }

  // Remove Modal
  dismiss() {
    this.viewCtrl.dismiss({
      dismissed: true,
    })
  }

}
