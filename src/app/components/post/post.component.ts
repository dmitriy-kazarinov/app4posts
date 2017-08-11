import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../services/data.service';
import { Post } from '../../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Post;

  constructor(private dataService: DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.id
    this.dataService.getPost(postId).subscribe(post => {
       this.post = post
    })
  }

}
