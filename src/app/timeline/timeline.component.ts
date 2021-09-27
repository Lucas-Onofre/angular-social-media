import { Post } from './../models/post.model';
import { PostService } from './../services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  posts: Post[];

  constructor(private service: PostService) { }

  ngOnInit(): void {
    this.service.listPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
    });
  }

}
