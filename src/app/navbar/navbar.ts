import { Component } from '@angular/core';
import {UserProfileComponent} from '../user-profile-component/user-profile-component';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {

    protected readonly Component = Component;
  protected readonly UserProfileComponent = UserProfileComponent;
}
