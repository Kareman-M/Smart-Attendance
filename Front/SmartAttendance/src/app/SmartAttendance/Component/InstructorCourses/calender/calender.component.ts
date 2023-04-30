
import {Component, ChangeDetectionStrategy, ViewChild, TemplateRef} from '@angular/core';
import { startOfDay, endOfDay, subDays, addDays,  endOfMonth, isSameDay, isSameMonth, addHours,} from 'date-fns';
import { Subject } from 'rxjs';
import {CalendarEvent,CalendarEventAction,CalendarEventTimesChangedEvent,CalendarView} from 'angular-calendar';
import { EventColor } from 'calendar-utils';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseService } from 'src/app/SmartAttendance/Service/base.service';
import { LectureService } from 'src/app/SmartAttendance/Service/lecture.service';
import { AddLucture } from 'src/app/SmartAttendance/Model/add-lucture';

const colors: Record<string, EventColor> = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3',
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF',
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA',
  },
};

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  @ViewChild('modalContent', { static: true }) modalContent!: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  refresh = new Subject<void>();

  events: CalendarEvent[] = [ ];

  activeDayIsOpen: boolean = true;

  constructor(private modal: NgbModal, private lectureService:LectureService) { }
  
  ngOnInit(){
    this.getAllLectures()
  }

  getAllLectures(){
    this.lectureService.getAllInstructorLectures(1).subscribe(res=> {
      console.log(res)
      var _events:any[] = [];
       res.forEach((element:AddLucture) => {
        _events.push(
          {
            start: new Date(element.date),
            end: new Date(element.date),
            title: element.title,
            color: { ...colors['blue'] },
          }
        )
      });
      
      this.events = _events;
      console.log(this.events)
    })
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // this.modalData = { event, action };
    // this.modal.open(this.modalContent, { size: 'lg' });
    console.log(event)
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter((event) => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }

  click(event:any){
    console.log(event)
  }
}
