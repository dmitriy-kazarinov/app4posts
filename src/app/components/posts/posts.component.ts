import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: Post[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getPosts().subscribe(posts => {
       this.posts = posts
    })
  }

}
