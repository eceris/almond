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

    private post: Post;

    constructor(private postService: PostService) {
        postService.get('test').subscribe(data => {
            this.post = data;
        });
    }

    ngOnInit() {
    }

}
