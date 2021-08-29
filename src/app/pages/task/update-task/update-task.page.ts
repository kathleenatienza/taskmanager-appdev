import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.page.html',
  styleUrls: ['./update-task.page.scss'],
})
export class UpdateTaskPage implements OnInit {
@Input()task;
categories = ['work', 'home','personal', 'school'];

taskName;
taskDate;
taskPriority;
taskCategory;


taskObject;

  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {

    this.taskName = this.task.value.itemName;
    this.taskDate = this.task.value.itemDate;
    this.taskPriority = this.task.value.itemPriority;
    this.taskCategory = this.task.value.itemCategory;

console.log(this.task);
  }
  selectedCategory(index){
    this.taskCategory = this.categories[index];
    console.log(this.taskCategory);
}
async dismis(){
  await this.modalCtrl.dismiss(this.taskObject);
}
async update(){
  this.taskObject = ({itemName:this.taskName,
    itemDate:this.taskDate,
    itemPriority:this.taskPriority,
    itemCategory:this.taskCategory,
  });
    //console.log(this.taskObject);

let uid = this.task.key;
await this.todoService.updateTask(uid, this.taskObject);
this.dismis();
}
}
