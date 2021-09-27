import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private service: PostService, private route: Router) { }

  ngOnInit(): void {
  }

  user: string = 'User_1';
  postTitle: string;
  postDescription: string;

  post(){
    if(this.postTitle.length > 0 && this.postDescription.length > 0){
      const valueToSend: Post = {id: this.getRandomId(), user: this.user, title: this.postTitle, description: this.postDescription}
      this.service.addPost(valueToSend).subscribe(result =>{
        console.log(result);
        this.clearForm();
        this.route.navigateByUrl('timeline');
      },
      error => console.log(error)
      );
    }
  }

  private clearForm(){
    this.postDescription = '';
    this.postTitle = '';
  }

  private getRandomId(){
    return Math.floor((Math.random()*100)+1)
  }

}
