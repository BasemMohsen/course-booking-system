import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent {
  // Static list of courses for the component
  courses = [
    {
      title: 'Angular Fundamentals',
      description: 'Learn the basics of Angular including components, templates and data binding.',
      price: 99.99,
      date: '2026-02-15'
    },
    {
      title: 'Advanced Angular Patterns',
      description: 'Deep dive into advanced topics: performance, change detection and NgRX patterns.',
      price: 149.99,
      date: '2026-03-10'
    }
  ];

  viewDetails(course: any) {
    // placeholder action — replace with router navigation or modal as needed
    console.log('View details for', course.title);
  }
}
