import { Component, OnInit } from '@angular/core';
import { OrdersService } from "src/app/api/orders.service";
import { Router, ResolveEnd } from "@angular/router";
import { Order } from "src/app/models/order";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage implements OnInit {
  orders: Order[];

  constructor(
    private ordersService: OrdersService,
    private router: Router) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    this.ordersService.getList().subscribe(response => {
      console.log(response);
      this.orders = response;
    })
  }


  delete(item) {
    this.ordersService.deleteItem(item.id).subscribe(Response => {
      //Update list after delete is successful
      this.getAllOrders();
    },
      (error) => {
        console.log(Response + ' | error: ' + error);
      });
  }
}
