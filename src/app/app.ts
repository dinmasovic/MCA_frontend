import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Navbar} from './navbar/navbar';
import {PostForm} from './post-form/post-form';
import {PostService} from './services/postservice/post-service';
import {CommonModule} from '@angular/common';
import {PostCard} from './post-card/post-card';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PostForm, CommonModule, PostCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('MiniTwitter');
  constructor(private postService: PostService) {
  }
  posts: any[] = [];
  ngOnInit(): void {
    this.postService.getPosts().subscribe({
      next: (data) => {
        this.posts = data
        console.log('Posts:', data);
      },
      error: (err) => console.error('Error fetching posts:', err)
    });

  }
}
