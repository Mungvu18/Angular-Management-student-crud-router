import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentCreateComponent } from './student-management/student-create/student-create.component';
import { StudentUpdateComponent } from './student-management/student-update/student-update.component';
import { StudentListComponent } from './student-management/student-list/student-list.component';
import { StudentDeleteComponent } from './student-management/student-delete/student-delete.component';
import { StudentDetailComponent } from './student-management/student-detail/student-detail.component';
import {StudentManagementModule} from './student-management/student-management.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    StudentCreateComponent,
    StudentUpdateComponent,
    StudentListComponent,
    StudentDeleteComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentManagementModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
