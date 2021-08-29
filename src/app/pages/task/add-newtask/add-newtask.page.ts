import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-add-newtask',
  templateUrl: './add-newtask.page.html',
  styleUrls: ['./add-newtask.page.scss'],
})
export class AddNewtaskPage implements OnInit {
categories = ['work', 'home','personal', 'school'];

taskName;
taskDate;
taskPriority;
taskCategory;


taskObject;
  constructor(public modalCtrl: ModalController, public todoService: TodoService) { }

  ngOnInit() {
  }


selectedCategory(index){
  this.taskCategory = this.categories[index];
  console.log(this.taskCategory);
}

async AddTask()
{
this.taskObject = ({itemName:this.taskName,
  itemDate:this.taskDate,
  itemPriority:this.taskPriority,
  itemCategory:this.taskCategory,
  });

console.log(this.taskObject);
let uid = this.taskName + this.taskDate;
if(uid){
await this.todoService.addTask(uid, this.taskObject);
}else{
  console.log('cant save empty task');
}
this.dismis();
}



async dismis(){
  await this.modalCtrl.dismiss(this.taskObject);
  }

}
