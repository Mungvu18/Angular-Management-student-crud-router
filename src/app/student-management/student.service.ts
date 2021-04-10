import { Injectable } from '@angular/core';
import {IStudent} from './istudent';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: IStudent[] = [
    {
      id: 1,
      name: 'Vũ Văn Mừng',
      age: 18
    },
    {
      id: 2,
      name: 'Văn Toàn',
      age: 18
    },
    {
      id: 3,
      name: 'Vũ Thanh',
      age: 28
    },
    {
      id: 4,
      name: 'Vũ Hiếu',
      age: 18
    },
  ]

  constructor() {
  }

  // @ts-ignore
  getAllStudent(): IStudent[] {
    return this.students;
  }

  getStudentById(id: number) {
    return this.students[id - 1];
  }

  updateStudentForm(student: IStudent, id: number) {
    this.students[id - 1] = student;
  }

  createStudentForm(student: IStudent) {
    let id = this.students.length+1;
    student.id = id;
    this.students.push(student);
    console.log(this.students);
  }

  // @ts-ignore
  deleteStudentForm(index: number): IStudent[] {
    for (let i = 0; i < this.students.length; i++) {
      if (this.students[i].id == index) {
        this.students.splice(i, 1);
        break;
      }
      // this.students = this.students.splice(0,index);
      console.log(this.students);
    }
  }
}
