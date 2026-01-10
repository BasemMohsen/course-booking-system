/**
 * Student model
 * - id: numeric identifier for the student
 * - name: full name
 * - email: contact email
 * - enrolledCoursesIds: array of course ids the student is enrolled in
 * - phoneNumber: optional phone number
 * - registrationDate: optional ISO date string when the student registered
 */
export interface Student {
  id: number;
  name: string;
  email: string;
  enrolledCoursesIds: number[];
  phoneNumber?: string;
  registrationDate?: string; // ISO date string e.g. "2026-01-10"
}

export type Students = Student[];
