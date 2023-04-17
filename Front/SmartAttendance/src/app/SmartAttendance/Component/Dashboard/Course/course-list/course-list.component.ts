import { Component, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { CourseDTO } from 'src/app/SmartAttendance/Model/course-dto';
import { CourseService } from 'src/app/SmartAttendance/Service/course.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent {

  dataSource: MatTableDataSource<CourseDTO> = new MatTableDataSource();
  displayedColumns: string[] = ['Name', 'Department', 'sympol'];

  @Input() public newCourse!: CourseDTO;

  constructor(private courseService: CourseService, private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getData();
  }

  ngOnChanges() {
    if (this.newCourse) this.updateDataSource();
  }

  getData() {
    this.courseService.getAll().subscribe(res => {
      console.log(res)
      if (res && res.value.length > 0) {
        this.dataSource.data = res.value;
        return;
      }
      this.dataSource.data = []
    })
  }

  remove(element: CourseDTO) {
    var res = confirm("Are you sure?");
    if (!res) return;
    this.courseService.delete(element.id).subscribe(res => {
      this.snackBar.open(res.message, "", { duration: 3000 });
      this.removeDeletedFromDataSource(element);
    })
  }

  removeDeletedFromDataSource(element: CourseDTO) {
    var index = this.dataSource.data.indexOf(element);
    console.log(index);
    if (index > -1) {
      this.dataSource.data.splice(index, 1);
      console.log(this.dataSource.data)
      this.dataSource._updateChangeSubscription();
    }
  }

  updateDataSource() {
    this.dataSource.data.push(this.newCourse);
    console.log(this.dataSource.data)
    this.dataSource._updateChangeSubscription();
  }
}
