import { Component } from '@angular/core';
// RouterOutlet import removed because AppComponent template does not use router outlet
import { CourseListComponent } from "./course-list/course-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CourseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-booking-system';
}
