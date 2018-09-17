import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable()
export class PostService {

    private postEventSource = new Subject<string>();
    postEventObservable = this.postEventSource.asObservable();
    
    constructor(private http: HttpClient) { }

    get(id) {
        return this.http.get<Post>('/api/posts/' + id);
    }

    list() {
        return this.http.get<Array<Post>>('/api/posts');
    }

    create() {
        return this.http.post<Post>('/api/posts', { title: "제목 없음" });
    }

    save(updatePost: Post) {
        updatePost.title = this.getTitleOfContent(updatePost.content);
        return this.http.put<Post>('/api/posts', updatePost);
    }

    delete(post: Post) {
        return this.http.delete<Post>('/api/posts/' + post.id);
    }

    announce(event) {
        this.postEventSource.next(event);
    }

    getTitleOfContent(content) {
        let contentFirstLine = content.split('\n')[0];
        if(contentFirstLine) {
            return contentFirstLine.replace(/\#/g,'');
        } else {
            return '제목 없음';
        }
    }

}