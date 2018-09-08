import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PostService } from './post.service';
import { Post } from './post';
import { CookieService } from 'ngx-cookie-service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    posts: Array<Post>;

    constructor(
        private postService: PostService,
        private route: ActivatedRoute,
        private router: Router,
        private cookieService: CookieService
    ) { }

    ngOnInit() {
        this.postService.list().subscribe(data => {
            this.posts = data;

            let childRoute = this.route.firstChild;
            if(childRoute) {
                let id = childRoute.snapshot.paramMap.get('id');
                if(id) {
                    this.viewPost(id);
                }
            } else {
                if(data && data.length > 0) {
                    this.viewPost(data[0].id);
                }
            }
        });
    }

    viewPost(id) {
        this.router.navigate([id, 'view']);
    }

    createPost() {
        this.postService.create().subscribe(result => {
            this.postService.list().subscribe(data => {
                this.posts = data;
                if(data && data.length > 0) {
                    this.router.navigate([this.posts[0].id, 'write']);
                }
            });
        });
    }

    editPost() {
        let currentPostId = this.getCurrentPostId();
        if(currentPostId) {
            this.router.navigate([currentPostId, 'write']);
        }
    }

    savePost() {
        this.postService.announce({
            key: "save",
            value: () => {
                this.postService.list().subscribe(data => {
                    this.posts = data;
                    if(data && data.length > 0) {
                        let currentPostId = this.getCurrentPostId();
                        if(currentPostId) {
                            this.viewPost(currentPostId);
                        }
                    }
                });
            }
        });
    }

    deletePost() {
        this.postService.announce({
            key: "delete",
            value: () => {
                this.postService.list().subscribe(data => {
                    this.posts = data;
                    if(data && data.length > 0) {
                        this.viewPost(data[0].id);
                    } else {
                        this.router.navigate(['']);
                    }
                });
            }
        });
    }

    getCurrentPostId(): string {
        let postId;
        let childRoute = this.route.firstChild;
        if(childRoute) {
            postId = childRoute.snapshot.paramMap.get('id');
        }
        return postId;
    }

    isActive(id): boolean {
        let currentPostId = this.getCurrentPostId();
        if(currentPostId && currentPostId === id) {
            return true;
        } else {
            return false;
        }
    }

    isEditable(): boolean {
        let cookie = this.cookieService.get('KEY_AUTH_COOKIE');
        if(cookie) {
            return true;
        } else {
            return false;
        }
    }

    isWriting(): boolean {
        let url = this.router.url;
        if(url.indexOf('/write') > -1) {
            return true;
        } else {
            return false;
        }
    }

    isViewing(): boolean {
        let url = this.router.url;
        if(url.indexOf('/view') > -1) {
            return true;
        } else {
            return false;
        }
    }

}