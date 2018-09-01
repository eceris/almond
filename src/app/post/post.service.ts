import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable()
export class PostService {

    private postEventSource = new Subject<string>();
    postEventObservable = this.postEventSource.asObservable();
    
    constructor(private http: HttpClient) { }

    get(id: string) {
        return this.http.get<Post>('/api/posts/' + id);
    }

    list() {
        return this.http.get<Array<Post>>('/api/posts');
    }

    create() {
        return this.http.post<Post>('/api/posts', {});
    }

    save(updatePost: Post) {
        console.log(updatePost)
        return this.http.put<Post>('/api/posts', { post: updatePost });
    }

    delete(post: Post) {
        return this.http.delete<Post>('/api/posts/' + post.id);
    }

    announce(event: any) {
        this.postEventSource.next(event);
    }

}