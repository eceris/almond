import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'app-post-view',
    templateUrl: './post.view.component.html',
    styleUrls: ['./post.view.component.css']
})
export class PostViewComponent implements OnInit {

    private post: Post;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute
    ) {}

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.postService.get(params.get('id'))
            )
        ).subscribe(data => {
            this.post = data;
        });
    }

}
