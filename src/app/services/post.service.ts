import { Post } from './../models/post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postList: Post[];
  private url = 'http://localhost:3000/posts'

  constructor(private httpClient: HttpClient) { }

  get posts(){
    return this.postList
  }

  listPosts(): Observable<Post[]>{
    return this.httpClient.get<Post[]>(this.url);
  }

  addPost(post: Post): Observable<Post>{
    this.setData(post);
    return this.httpClient.post<Post>(this.url, post)
  }

  private setData(post: Post){
    post.date = new Date();
  }
}
