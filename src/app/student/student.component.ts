import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../student-data.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  students: {
    name: string,
    age: number,
    class: number,
    secction: string
  }[] = []; 
  constructor(private studentService: StudentDataService) { }

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
  addStudent(name: string, age: string, class1: string, section: string){
    let newStudent = {
      name: name,
      age: +age,
      class: +class1,
      section: section
    }
    this.studentService.addStudent(newStudent);
  }

}
