import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from 'src/app/model/Course';


@Component({
  selector: 'app-course-block',
  templateUrl: './course-block.component.html',
  styleUrls: ['./course-block.component.scss']
})
export class CourseBlockComponent implements OnInit {
  @Input() course: Course;
  @Input() isSelected: boolean;
  @Output() activate = new EventEmitter<Course>();
  @Output() deactivate = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  toggleDetails(): void {
    if (this.isSelected) {
      this.deactivate.emit(this.course);
    } else {
      this.activate.emit(this.course);
    }
  }

}
