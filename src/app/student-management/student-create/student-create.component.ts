import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {IStudent} from '../istudent';
import {Router} from '@angular/router';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.scss']
})
export class StudentCreateComponent implements OnInit {
  students: IStudent[] = [];
  student: IStudent = {
    id: this.students.length,
    name: "",
    age: 0,
  };

  constructor(private studentService: StudentService, private router: Router) { }

  ngOnInit(): void {
    this.students = this.studentService.getAllStudent()
  }

  createStudent(){
    this.studentService.createStudentForm(this.student);
    this.router.navigate(['/']);
  }

}
