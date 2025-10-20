import { Component } from '@angular/core';
import {UserService} from '../services/userservice/user-service';
import {PostCard} from '../post-card/post-card';

@Component({
  selector: 'app-user-profile-component',
  imports: [
    PostCard
  ],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css'
})
export class UserProfileComponent {
    constructor(private userService: UserService) {
    }
    userPosts : any = []
    ngOnInit() {
      this.userService.getUserPosts().subscribe({
        next: (data) => {
          console.log(data);
          this.userPosts = data
        },
        error: (err) => {
          alert("Error fetching posts posts from server");
        },
        complete: () => {
          console.log('User Posts completed');
        }
      })
    }
}
