import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Task', url: '/task', icon: 'alarm' },
    { title: 'Notes', url: '/notes', icon: 'heart' },
    { title: 'Checklist', url: '/checklist', icon: 'bag-check' },
  ];

  constructor() {}
  onToggleColorTheme(event){
    console.log(event.detail.checked);

    if (event.detail.checked) {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
