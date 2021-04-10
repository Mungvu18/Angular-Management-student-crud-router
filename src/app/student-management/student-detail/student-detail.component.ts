import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {IStudent} from '../istudent';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {
  id: number;
  student: IStudent;
  constructor(private activatedRouter: ActivatedRoute, private studentService: StudentService) {
  }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id = Number(paramMap.get("id"));
        this.getStudentById(this.id);
      }
    )
  }
  // @ts-ignore
  getStudentById(id: number): IStudent{
    this.student = this.studentService.getStudentById(this.id);
    console.log(this.student);
  }
}
