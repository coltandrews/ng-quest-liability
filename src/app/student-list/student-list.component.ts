import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../models/student';
import { StudentsService } from '../services/students.service';

@Component({
  selector: 'student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  public students: Student[] = [];
  constructor(
    private studentsService: StudentsService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  async showAllStudents() {
    this.students = await this.studentsService.getAllStudents();
  }

  async showFlaggedStudents() {
    this.students = await this.studentsService.getFlaggedStudents();
  }
  async showUnflaggedStudents() {
    this.students = await this.studentsService.getUnflaggedStudents();
  }
 

}
