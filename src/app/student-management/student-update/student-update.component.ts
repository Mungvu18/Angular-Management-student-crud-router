import { Component, OnInit } from '@angular/core';
import {IStudent} from '../istudent';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {StudentService} from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.scss']
})
export class StudentUpdateComponent implements OnInit {
  id:number;
  student:IStudent = {
    id: 1,
    name: 'mung',
    age: 19
};
  constructor( private router: Router , private activatedRouter: ActivatedRoute, private studentService: StudentService) { }

  ngOnInit(): void {
    this.activatedRouter.paramMap.subscribe((paramMap: ParamMap) =>{
      this.id =Number(paramMap.get("id"));
      this.getStudentById(this.id);
    })
  }
  // @ts-ignore
  getStudentById(id: number): IStudent{
   return this.student = this.studentService.getStudentById(id);
  }
  updateStudent(){
    this.studentService.updateStudentForm(this.student,this.id);
    this.router.navigate(['/']);
  }
}
