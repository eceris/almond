import { Component, OnInit } from '@angular/core';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'app-post-write',
    templateUrl: './post.write.component.html',
    styleUrls: ['./post.write.component.css']
})
export class PostWriteComponent implements OnInit {

    private post: Post;

    constructor(
        private postService: PostService
    ) {}

    ngOnInit() {
    }

}
