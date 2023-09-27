import { Injectable } from '@angular/core';
import { Task } from '../interfaces/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = []
  private idCounter: number = 1
  
  constructor() { }
  
  getTasks() {
    return this.tasks
  }
  
  addTask(task: Task): void {
    task.id = this.idCounter++
    this.tasks.push(task)
  }
  
  deleteTask(id: number): void {
    this.tasks = this.tasks.filter(task => task.id !== id)
  }
}
