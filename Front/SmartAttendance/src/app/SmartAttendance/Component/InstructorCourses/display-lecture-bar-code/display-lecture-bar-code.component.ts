import { Component, HostListener, Inject, OnInit, ViewChild } from '@angular/core';
import { LectureService } from '../../../Service/lecture.service';
import { Lucture } from '../../../Model/lecture';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { DOCUMENT } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-display-lecture-bar-code',
  templateUrl: './display-lecture-bar-code.component.html',
  styleUrls: ['./display-lecture-bar-code.component.css']
})


export class DisplayLectureBarCodeComponent implements OnInit {




  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  luctures: Lucture[] = [];
  instructorId: number = 1;
  selectedLucture!: Lucture;
  @ViewChild('icon') icon !: MatIcon;
  element!: any;

  constructor(private lectureService: LectureService, @Inject(DOCUMENT) private document: any) { }

  @HostListener('document:fullscreenchange', ['$event'])
  handleKeyboardEvent(event: any) {
    this.icon._elementRef.nativeElement.innerHTML= this.icon._elementRef.nativeElement.innerHTML == 'unfold_less'?'unfold_more':'unfold_less'
  }

  ngOnInit() {
    this.getAllLectures();
    this.element = document.documentElement;
  }

  fullscreen() {

    console.log(this.element.children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[1].children[1].children[0].children[1])
    var element = this.element.children[1].children[0].children[1].children[0].children[1].children[1].children[0].children[1].children[1].children[0].children[1];
    if (element.requestFullscreen) {
      element.requestFullscreen();
    }
    if(this.icon._elementRef.nativeElement.innerHTML == 'unfold_less') {
      this.document.exitFullscreen();
    }

  }

  getAllLectures() {
    this.lectureService.getAllTodayInstructorLectures(this.instructorId).subscribe(res => {
      console.log(res);
      
      this.luctures = res;
      if(this.luctures.length > 0) this.selectedLucture = this.luctures[0]
    })
  }

  selectLecture(lecture: Lucture) {
    this.selectedLucture = lecture;
  }
}
