import { Component } from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle} from '@angular/material/card';
import {PostService} from '../services/postservice/post-service';
import {PostForm} from '../post-form/post-form';
import {PostCard} from '../post-card/post-card';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'post-component',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    PostForm,
    PostCard
  ],
  templateUrl: './post-component.html',
  styleUrl: './post-component.css'
})
export class PostComponent {
  posts : any =[]
  constructor(private postService : PostService) { }
  ngOnInit(): void {
    this.postService.getPosts().subscribe(posts => this.posts = posts);
  }
  onDeletePost(id: number) {
    this.posts = this.posts.filter((post: { id: number; }) => post.id !== id);
  }

}
