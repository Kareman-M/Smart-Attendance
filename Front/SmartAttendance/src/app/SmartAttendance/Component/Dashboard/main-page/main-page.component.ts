import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DepartmentDialogComponent } from '../Department/department-dialog/department-dialog.component';
import { CourseDialogComponent } from '../Course/course-dialog/course-dialog.component';
import { UserDialogComponent } from '../User/user-dialog/user-dialog.component';
import { Subscription, map, share, timer } from 'rxjs';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent {

  time = new Date();
  rxTime = new Date();
  intervalId: any;
  subscription!: Subscription;

  constructor(private matDialog: MatDialog) { }

  ngOnInit() {
    this.clock();
  }

  openDepartmentsDialog() {
    this.matDialog.open(DepartmentDialogComponent, {
      width: '70%',
      position: {
        top: '2%'
      }
    })
  }

  openCourseDialog() {
    this.matDialog.open(CourseDialogComponent, {
      width: '70%',
      position: {
        top: '2%'
      }
    })
  }

  openUserDialog() {
    this.matDialog.open(UserDialogComponent, {
      width: '70%',
      position: {
        top: '2%'
      }
    })
  }

  clock() {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);

    // Using RxJS Timer
    this.subscription = timer(0, 1000)
      .pipe(
        map(() => new Date()),
        share()
      )
      .subscribe(time => {
        let hour = this.rxTime.getHours();
        let minuts = this.rxTime.getMinutes();
        let seconds = this.rxTime.getSeconds();
        //let a = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });
        let NewTime = hour + ":" + minuts + ":" + seconds
        this.rxTime = time;
      });
  }


  ngOnDestroy() {
    clearInterval(this.intervalId);
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
