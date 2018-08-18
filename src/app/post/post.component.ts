import { Component, OnInit } from '@angular/core';
import { PostService } from './post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  // TODO Post 객체 생성
  content: any;

  constructor(private postService: PostService) {
    postService.get('test').subscribe(data => {
      this.content = data.content;
    });
  }

  ngOnInit() {
  }

}
