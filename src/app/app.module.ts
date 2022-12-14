import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { LoginComponent } from './components/login/login.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { FormsModule } from '@angular/forms';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { EmployeePipe } from './pipes/employee.pipe';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddCustomerComponent,
    EditCustomerComponent,
    ShowCustomersComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    SideBarComponent,
    PnfComponent,
    FooterComponent,
    SearchEmployeeComponent,
    SearchCustomerComponent,
    FilterPipe,
    EmployeePipe,
    ShowEmployeesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
