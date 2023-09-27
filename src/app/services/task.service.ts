import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []
  
  constructor() { }
  
  getTasks() {
    return this.tasks
  }
  
  addTask(task: Task): void {
    this.tasks.push(task)
  }
}
