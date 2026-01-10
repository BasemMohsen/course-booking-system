import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {
  @Input() course?: Course;
  @Input() wished: boolean = false;
  @Output() toggleWish = new EventEmitter<Course>();

  viewDetails() {
    // small wrapper to allow template to call this method
    alert(`View details for ${this.course?.title}`);
  }

  onToggleWish(event: MouseEvent) {
    event.stopPropagation();
    this.toggleWish.emit(this.course);
  }
}
