import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../courses.service';
import { Course } from 'src/app/model/Course';

@Component({
  selector: 'app-path-page',
  templateUrl: './path-page.component.html',
  styleUrls: ['./path-page.component.scss']
})
export class PathPageComponent implements OnInit {

  public allCourses: Course[];

  constructor(private coursesService: CoursesService) { }

  ngOnInit() {
    this.coursesService.getAllCourses().subscribe( (c) => this.allCourses = c, (err) => console.log(err));
/*     const foo = this.coursesService.getFoo();
    console.log(foo); */
  }

}
