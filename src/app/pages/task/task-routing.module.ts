import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPage
  },
  {
    path: 'add-newtask',
    loadChildren: () => import('./add-newtask/add-newtask.module').then( m => m.AddNewtaskPageModule)
  },
  {
    path: 'update-task',
    loadChildren: () => import('./update-task/update-task.module').then( m => m.UpdateTaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
