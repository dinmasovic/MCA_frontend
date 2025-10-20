import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7191/api/user'; // 🔗 your backend URL

  constructor(private http: HttpClient) {}

  deletePost(id: number) {
    return this.http.delete(this.apiUrl+"/deletePost/"+id, { responseType: 'text' });
  }
  addPost(content: string, userId: number){
    return this.http.post(this.apiUrl+"/createPost",{"content":content, "userId":userId});
  }
  getUserPosts(){
    return this.http.get(this.apiUrl+"/userPosts")
  }

}
