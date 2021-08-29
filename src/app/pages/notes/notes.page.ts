import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
})
export class NotesPage implements OnInit {


  constructor(public noteService: NotesService, private alertCtrl: AlertController, private navCtrl: NavController){

  }

  ngOnInit(){
    this.noteService.load();
  }

  addNote(){

    this.alertCtrl.create({
      header: 'New Note',
      message: 'Title?',
      inputs: [
        {
          type: 'text',
          name: 'title'
        }
      ],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.noteService.createNote(data.title);
          }
        }
      ]
    }).then((alert) => {
      alert.present();
    });

  }

}
