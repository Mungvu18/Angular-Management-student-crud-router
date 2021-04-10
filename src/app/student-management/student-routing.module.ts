import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StudentListComponent} from './student-list/student-list.component';
import {StudentCreateComponent} from './student-create/student-create.component';
import {StudentUpdateComponent} from './student-update/student-update.component';
import {StudentDetailComponent} from './student-detail/student-detail.component';
import {StudentDeleteComponent} from './student-delete/student-delete.component';

// bước 1 tạo ra một mảng routes chứa các đường dẫn và component để xử lý request
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'student-list'},
  { path: 'student-list', component: StudentListComponent},
  { path: 'student-create', component: StudentCreateComponent},
  { path: 'student-update/:id', component: StudentUpdateComponent},
  { path: 'student-detail/:id', component: StudentDetailComponent},
  { path: 'student-delete/:id', component: StudentDeleteComponent}
];

// bước 2 imports RouterModule.forRoot(routes) vào trong @NgModule
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class StudentRoutingModule { }
