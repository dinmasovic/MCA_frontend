import { Routes } from '@angular/router';
import {PostForm} from './post-form/post-form';
import {Navbar} from './navbar/navbar';
import {PostCard} from './post-card/post-card';
import {PostComponent} from './post-component/post-component';
import {UserProfileComponent} from './user-profile-component/user-profile-component';

export const routes: Routes = [
  { path: '', component: PostComponent },
  {path: 'profile', component: UserProfileComponent},
];
