import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from "rxjs";
import { ICustomer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'pm-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit, OnDestroy {

  pageTitle = 'Customer List';
  imageWidth = 50;
  imageMargin = 2;
  showImage = false;
  errorMessage = '';
  sub!: Subscription;

  private _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredCustomers = this.performFilter(value);
  }

  filteredCustomers: ICustomer[] = [];
  customers: ICustomer[] = [];

  constructor(private customerService: CustomerService) {}

  performFilter(filterBy: string): ICustomer[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.customers.filter((customer: ICustomer) =>
      customer.firstName.toLocaleLowerCase().includes(filterBy));
  }

  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  ngOnInit(): void {
    this.sub = this.customerService.getCustomers().subscribe({
      next: customers => {
        this.customers = customers;
        this.filteredCustomers = this.customers;
      },
      error: err => this.errorMessage = err
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  onRatingClicked(message: string): void {
    this.pageTitle = 'Customer List: ' + message;
  }

}
