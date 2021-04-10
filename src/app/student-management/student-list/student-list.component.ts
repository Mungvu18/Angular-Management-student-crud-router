import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {IStudent} from '../istudent';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: IStudent[] = [];
  constructor(private studentService: StudentService) {
    this.getAll();
  }

  ngOnInit(): void {
  }
  // @ts-ignore
  getAll() : IStudent[] {
   this.students = this.studentService.getAllStudent();
  }

}
