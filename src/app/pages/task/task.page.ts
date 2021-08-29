import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/todo.service';
import { AddNewtaskPage } from './add-newtask/add-newtask.page';
import { UpdateTaskPage } from './update-task/update-task.page';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {

  todoList = [];

  today: number = Date.now();
  constructor(public modalCtrl: ModalController, public  todoService: TodoService) {
  this.getalltask();
  }

  async addTask(){
const modal =await this.modalCtrl.create({
  component: AddNewtaskPage
});

modal.onDidDismiss().then(newTaskObj =>{
this.getalltask();
});

return await modal.present();
  }
getalltask(){
this.todoList = this.todoService.getAlltasks();
console.log(this.todoService.getAlltasks());
}

  delete(key){
this.todoService.deleteTask(key);
this.getalltask();
  }
  async update(selectedTask){
const modal = await this.modalCtrl.create({
  component: UpdateTaskPage,
  componentProps:{task: selectedTask}
});
modal.onDidDismiss().then(()=>{
  this.getalltask();
}
);

//console.log(selectedTask);
return await modal.present();
  }

  }


