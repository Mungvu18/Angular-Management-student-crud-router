import { Component, OnInit } from '@angular/core';
import {StudentService} from '../student.service';
import {IStudent} from '../istudent';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-student-delete',
  templateUrl: './student-delete.component.html',
  styleUrls: ['./student-delete.component.scss']
})
export class StudentDeleteComponent implements OnInit {
  students: IStudent[] = [];
  student: IStudent;
  id: number;
  constructor(private studentService: StudentService, private activatedRoute: ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paraMap : ParamMap) =>{
      this.id = Number(paraMap.get("id"));
      this.findStudentById(this.id);
    });
  }
  findStudentById(id: number){
   this.student = this.studentService.getStudentById(id);
  }
  delete(){
    console.log(this.id);
    this.studentService.deleteStudentForm(this.id);
    this.router.navigate(['/']);
  }

}
