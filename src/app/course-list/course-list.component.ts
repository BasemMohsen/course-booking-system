import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from '../course-card/course-card.component';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-course-list',
  standalone: true,
  imports: [CommonModule, CourseCardComponent],
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  // Static list of courses for the component
  courses: Course[] = [];
  // wishlist holds course ids
  wishlist = new Set<number>();

  constructor(private courseService: CourseService) {}

  ngOnInit() : void{
    // Perform any initialization logic here
    console.log('Course list initialized');
    this.courses = this.courseService.getCourses();
  }

  viewDetails(course: Course) {
    // placeholder action — replace with router navigation or modal as needed
    alert(`View details for ${course.title}`);
  }

  toggleWishlist(course: Course) {
    if (this.wishlist.has(course.id)) {
      this.wishlist.delete(course.id);
    } else {
      this.wishlist.add(course.id);
    }
  }

  isWished(course: any) {
    return this.wishlist.has(course.id);
  }

  get wishedCourses() {
    return this.courses.filter(c => this.wishlist.has(c.id));
  }
}
