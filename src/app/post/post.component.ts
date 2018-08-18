import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    private posts: Array<Post>;

    constructor(
        private postService: PostService
    ) {}

    ngOnInit() {
        this.postService.list().subscribe(data => {
            this.posts = data;
        });
    }

}
