import { Component, OnInit } from '@angular/core';
import { StockItem } from "src/app/models/stock-item";
import { Router } from "@angular/router";
import { StockItemService } from "src/app/api/stock-item.service";

@Component({
  selector: 'app-stock-item-list',
  templateUrl: './stock-item-list.page.html',
  styleUrls: ['./stock-item-list.page.scss'],
})
export class StockItemListPage implements OnInit {
  stockItems: StockItem[];

  constructor(
    private stockItemService: StockItemService,
    private router: Router) { }

  ngOnInit() {
    this.getAllStockItems();
  }

  getAllStockItems() {
    this.stockItemService.getList().subscribe(response => {
      console.log(response);
      this.stockItems = response;
    })
  }


  delete(item) {
    this.stockItemService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllStockItems();
    },
      (error) => {
        console.log(Response + ' | error: ' + error);
      });
  }


}
