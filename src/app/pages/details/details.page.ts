import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Note } from 'src/app/interfaces/note';
import { NotesService } from 'src/app/services/notes.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public note: Note;

  constructor(private route: ActivatedRoute, private noteService: NotesService, private navCtrl: NavController) {

    // Initialise a placeholder note until the actual note can be loaded in
    this.note = {
      id: '',
      title: '',
      content: ''
    };

  }

  ngOnInit() {

    // Get the id of the note from the URL
    const noteId = this.route.snapshot.paramMap.get('id');

    // Check that the data is loaded before getting the note
    // This handles the case where the detail page is loaded directly via the URL
    if(this.noteService.loaded){
      this.note = this.noteService.getNote(noteId);
    } else {
      this.noteService.load().then(() => {
        this.note = this.noteService.getNote(noteId);
      });
    }

  }

  noteChanged(){
    this.noteService.save();
  }

  deleteNote(){
    this.noteService.deleteNote(this.note);
    this.navCtrl.navigateBack('/notes');
  }

}
