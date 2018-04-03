import { Component } from '@angular/core';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  taskInput:string
  taskList: Task[] = []

  addtTask(taskInput:string) {
    if(taskInput.length > 3){
      this.taskList.push({name: taskInput, date: new Date() ,checked: false})
      this.taskInput = ''
    }
    
  }
}
