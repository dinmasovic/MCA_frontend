import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {PostService} from '../services/postservice/post-service';
import {NgForOf,NgIf} from '@angular/common';
import {UserService} from '../services/userservice/user-service';

/**
 * @title Card overview
 */
@Component({
  standalone: true,
  selector: 'post-card',
  templateUrl: 'post-card.html',
  styleUrl: 'post-card.css',
  imports: [MatCardModule, MatButtonModule, NgForOf,NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  @Input() posts: any[] = [];
  postContent: string = '';
  constructor(private userService: UserService) {
  }
  deletePost(id: number) {
    this.userService.deletePost(id).subscribe(() => {
      this.posts = this.posts.filter(post => post.id !== id);
      window.location.reload()
    });
  }
}
