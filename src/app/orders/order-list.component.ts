import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { IOrder } from './order';
import { OrderService } from './order.service';

@Component({
  selector: 'pm-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, OnDestroy {

  pageTitle = 'Orders';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = 0;
  get listFilter(): number {
    return this._listFilter;
  }
  set listFilter(value: number) {
    this._listFilter = value;
    this.filteredOrders = this.performFilter(value);
  }

  filteredOrders: IOrder[] = [];
  orders: IOrder[] = [];

  constructor(private orderService: OrderService) {}

  performFilter(filterBy: number): IOrder[] {
    /* filterBy = filterBy.toLocaleLowerCase(); */
    return this.orders.filter((order: IOrder) =>
      /* order.orderNumber.toString().includes(filterBy.toString())); */
      order.orderNumber == filterBy);
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.orderService.getOrders().subscribe({
      next: orders => {
        this.orders = orders;
        this.filteredOrders = this.orders;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Orders: ' + message;
  }

}
