import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/interfaces/Employee';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-show-employees',
  templateUrl: './show-employees.component.html',
  styleUrls: ['./show-employees.component.css']
})
export class ShowEmployeesComponent implements OnInit {
  employees: Employee[]=[]

  constructor(private es: EmployeesService, private modal: NgbModal) { }

  ngOnInit(): void {
    this.es.getEmployees().subscribe({
      next: (employeesData: Employee[]) => (this.employees = employeesData)
    })
  }

}
