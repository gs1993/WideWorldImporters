import { Component, OnInit } from '@angular/core';
import { Order } from "src/app/models/order";
import { OrdersService } from "src/app/api/orders.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.page.html',
  styleUrls: ['./order-create.page.scss'],
})
export class OrderCreatePage implements OnInit {
  order: Order

  constructor(
    private ordersService: OrdersService,
    private router: Router) {
    this.order = new Order();
  }

  ngOnInit() {
  }

  submitForm() {
    this.ordersService.createItem(this.order).subscribe((response) => {
      this.router.navigate(['order-list']);
    });

  }
}
