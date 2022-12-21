import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css'],
})
export class SearchCustomerComponent implements OnInit {
  customer: Customer[] = [];
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';

  constructor(private cs: CustomersService) {}

  ngOnInit(): void {
    this.cs.getCustomers().subscribe({
      next: (customers: Customer[]) => 
        {this.customer = customers}  
        })
      }
  }
