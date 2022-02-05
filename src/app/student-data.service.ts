import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {
  private students: {
    name: string,
    age: number,
    class: number,
    secction: string
  }[]= [
    {
      name: 'jeon',
      age: 24,
      class: 4,
      secction: 'A'
    },
    {
      name: 'kim',
      age: 24,
      class: 4,
      secction: 'A'
    },
    {
      name: 'park',
      age: 24,
      class: 4,
      secction: 'A'
    },
    {
      name: 'jung',
      age: 24,
      class: 4,
      secction: 'A'
    },
    {
      name: 'min',
      age: 24,
      class: 4,
      secction: 'A'
    }
  ]
  constructor() { }

  getStudents(){
    return this.students;
  }
  addStudent(student:any){
    this.students.push(student);
    console.log(student);
  }

}
