import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Course } from './model/Course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private http: HttpClient ) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get('assets/data/pathData.json').pipe(map(data => <Course[]>data));
  }

  getFoo(): string {
    return 'foo';
  }
}
