import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription }   from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'app-post-view',
    templateUrl: './post.view.component.html',
    styleUrls: ['./post.view.component.css']
})
export class PostViewComponent implements OnInit, OnDestroy {

    private post: Post;
    private subscription: Subscription;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute
    ) {
        this.subscription = this.postService.postEventObservable.subscribe(astronaut => {
            if(astronaut['key'] === 'delete') {
                this.postService.delete(this.post).subscribe(data => {
                    astronaut['value'].apply();
                });
            }
        });
    }

    ngOnInit() {
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) =>
                this.postService.get(params.get('id'))
            )
        ).subscribe(data => {
            this.post = data;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
