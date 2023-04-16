import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from 'src/app/SmartAttendance/Model/course';
import { Department } from 'src/app/SmartAttendance/Model/department';
import { DepartmentService } from 'src/app/SmartAttendance/Service/department.service';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class DepartmentListComponent {

  dataSource: MatTableDataSource<Department> = new MatTableDataSource();
  displayedColumns: string[] = ['Name', 'sympol'];
  expandedElement!: Course | null;
  @Input() public newDepartment!: Department;

  constructor(private departmentService: DepartmentService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  ngOnChanges() {
    if (this.newDepartment) this.updateDataSource();
  }

  getData() {
    this.departmentService.getAll().subscribe(res => {
      if (res && res.value.length > 0) {
        this.dataSource.data = res.value;
        return;
      }
      this.dataSource.data = []
    })
  }

  remove(element: Department) {
    var res = confirm("Are you sure?");
    if (!res) return;
    this.departmentService.delete(element.id).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 3000 });
      this.removeDeletedFromDataSource(element);
    })
  }

  removeDeletedFromDataSource(element: Department) {
    var index = this.dataSource.data.indexOf(element);
    console.log(index);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      console.log(this.dataSource.data)
      this.dataSource._updateChangeSubscription();
    }
  }

  updateDataSource() {
    console.log(this.newDepartment);
    this.dataSource.data.push(this.newDepartment);
    console.log(this.dataSource.data)
    this.dataSource._updateChangeSubscription();
  }
}
