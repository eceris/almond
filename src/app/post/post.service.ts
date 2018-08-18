import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './post';

@Injectable()
export class PostService {
    
    constructor(private http: HttpClient) { }

    get(id: string) {
        return this.http.get<Post>('/api/posts/' + id);
    }

    list() {
        return this.http.get<Array<Post>>('/api/posts');
    }

}