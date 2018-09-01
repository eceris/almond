import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription }   from 'rxjs';

import { PostService } from './post.service';
import { Post } from './post';

@Component({
    selector: 'app-post-write',
    templateUrl: './post.write.component.html',
    styleUrls: ['./post.write.component.css']
})
export class PostWriteComponent implements OnInit, OnDestroy {

    post: Post;
    private subscription: Subscription;

    constructor(
        private postService: PostService,
        private activeRoute: ActivatedRoute
    ) {
        this.subscription = this.postService.postEventObservable.subscribe(astronaut => {
            if(astronaut['key'] === 'save') {
                this.postService.save(this.post).subscribe(data => {
                    astronaut['value'].apply();
                });
            }
        });
    }

    ngOnInit() {
        let id = this.activeRoute.snapshot.paramMap.get('id');
        this.postService.get(id).subscribe(data => {
            this.post = data;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
