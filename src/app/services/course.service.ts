import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private   courses: Course[] = [
      {
        id: 1,
        title: 'Angular Fundamentals',
        description: 'Learn the basics of Angular including components, templates and data binding.',
        price: 99.99,
        date: '2026-02-15',
    soldout: false,
    onSale: true,
    image:'angular.png'
      },
      {
        id: 2,
        title: 'Advanced Angular Patterns',
        description: 'Deep dive into advanced topics: performance, change detection and NgRX patterns.',
        price: 149.99,
        date: '2026-03-10',
    soldout: true,
    onSale: false,
    image:'angular.png'
      }
    ];
    
  constructor() { }

  getCourses(): Course[] {
    return this.courses;
  }

}
