import { Component} from '@angular/core';
import { Task } from 'src/app/interfaces/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  isModalOpen: boolean = false
  titleValueInput: string = ''
  
  constructor(private taskService: TaskService) {}
  
  setOpenModal() {
    this.isModalOpen = !this.isModalOpen
  }
  
  setCloseModal(): void {
    this.isModalOpen = !this.isModalOpen
  }
  
  createTask() {
    const task: Task = {
      title: this.titleValueInput
    }
    
    this.taskService.addTask(task)
    this.titleValueInput = ''
    this.setCloseModal()
  }
  
}
