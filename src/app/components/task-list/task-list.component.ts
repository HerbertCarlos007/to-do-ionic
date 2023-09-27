import { Component, OnInit, } from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent  implements OnInit {
  tasks: Task[] = []
  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.getTasks()
  }
  
  getTasks() {
    this.tasks = this.taskService.getTasks()
  }
  
  deleteTask(id: number) {
    this.taskService.deleteTask(id)
    this.getTasks()
  }
  
  
}


