import { Component, OnInit, Input } from '@angular/core';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-path-level-row',
  templateUrl: './path-level-row.component.html',
  styleUrls: ['./path-level-row.component.scss']
})
export class PathLevelRowComponent implements OnInit {
  @Input() courses: Course[];
  public selectedCourse: Course;

  constructor() { }

  ngOnInit() {
  }

  showCourseDetails(selected: Course): void {
    this.selectedCourse = selected;
  }

  hideCourseDetails(source: Course): void {
    if (this.selectedCourse.id === source.id) {
      this.selectedCourse = null;
    }
  }
}
