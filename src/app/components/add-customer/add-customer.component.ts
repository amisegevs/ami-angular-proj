import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/Customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  customer: Customer = {firstName: "", lastName: "", phone: "", email: ""}

  constructor(private cs: CustomersService) { }

  ngOnInit(): void {
  }

  addNewCustomer() {
    this.cs.addCustomer(this.customer)
    .then(() => {
      console.log("Customer was added")
      this.reset()
  })
    .catch((err) => console.log(err))
  }

  reset() {
    this.customer = {firstName: "", lastName: "", phone: "", email: ""}
  }

}
