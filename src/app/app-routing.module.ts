import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PnfComponent } from './components/pnf/pnf.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchCustomerComponent } from './components/search-customer/search-customer.component';
import { SearchEmployeeComponent } from './components/search-employee/search-employee.component';
import { ShowCustomersComponent } from './components/show-customers/show-customers.component';
import { ShowEmployeesComponent } from './components/show-employees/show-employees.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: "", pathMatch: 'full', redirectTo: "login"},
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "home", component: HomeComponent, canActivate: [AuthGuard]},
  {path: "navbar", component: NavbarComponent, canActivate:[AuthGuard]},
  {path: "side-bar", component: SideBarComponent, canActivate:[AuthGuard]},
  {path: "add-customer", component: AddCustomerComponent, canActivate:[AuthGuard]},
  {path: "show-customer", component: ShowCustomersComponent, canActivate:[AuthGuard]},
  {path: "search-customer", component: SearchCustomerComponent, canActivate:[AuthGuard]},
  {path: "search-employee", component: SearchEmployeeComponent, canActivate:[AuthGuard]},
  {path: "show-employees", component: ShowEmployeesComponent, canActivate:[AuthGuard]},
  {path: "**", component: PnfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
