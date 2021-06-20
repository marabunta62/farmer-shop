import { Component, OnInit } from '@angular/core';
import { ShopService } from '../../services/shop-service';
import { shop } from "../../models/shop";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.page.html',
  styleUrls: ['./shop.page.scss'],
  providers: [ ShopService ]
})
export class ShopPage implements OnInit {
  shop = new shop();
  currentShop: shop;
  newShop: boolean = true;

  constructor(private shopService: ShopService) {
  }

  ngOnInit() {
    this.getShop();
  }


  getShop() {
    //passe un id en dur existant en bdd, car tu devrai l'avoir en fonction de l'authent
    this.shopService.getShop({})
      .subscribe(data => {
        if (data === null) {
          this.newShop = true;
        } else {
          this.currentShop = data;
          this.newShop = false;
        }
      });
  }

  createShop() {
    this.shopService.createShop(this.shop);
  }

  updateShop() {
    this.shopService.updateShop(this.shop).subscribe( () => {
      this.getShop();
    })
  }

}
