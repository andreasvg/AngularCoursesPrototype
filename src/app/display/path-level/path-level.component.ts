import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-path-level',
  templateUrl: './path-level.component.html',
  styleUrls: ['./path-level.component.scss']
})
export class PathLevelComponent implements OnInit, OnChanges {
  @Input() courses: Course[];
  // public filteredCourses: Course[];
  public courseRows: Course[][];

  constructor() { }

  ngOnInit() {
    this.courseRows = new Array();
  }

  ngOnChanges() {
    if (this.courses) {
      for (let i = 0; i <= this.courses.length; i = i + 4) {
        this.courseRows.push(this.courses.slice(i, i + 4));
      }
    }

  }

}
