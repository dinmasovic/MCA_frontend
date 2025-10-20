import { Component } from '@angular/core';
import {MatButton} from '@angular/material/button';
import {FormsModule, NgForm} from '@angular/forms';
import {PostService} from '../services/postservice/post-service';
import {UserService} from '../services/userservice/user-service';

@Component({
  selector: 'app-post-form',
  imports: [
    MatButton,
    FormsModule
  ],
  templateUrl: './post-form.html',
  styleUrl: './post-form.css'
})
export class PostForm {
  postContent : string = ''
  constructor(private userService: UserService) {
  }
  onSubmit(form: NgForm) {
      this.userService.addPost(this.postContent,1).subscribe({
        next: (response) => {
          window.location.reload()
        },
        error: (err) => {
          alert(' Error: the content must have minimum 12 characters or maximum 140 characters.');
        },
        complete: () => {
          console.log('Request complete');
        },
      })
  }
}
