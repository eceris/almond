import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';

import { Post } from './post';

@Injectable()
export class PostServiceMock {

    private postEventSource = new Subject<string>();
    postEventObservable = this.postEventSource.asObservable();

    private posts = [
        { id: 1, title: "첫번째 메모", content: "첫번째 메모"},
        {
            id: 2, title: "마크다운",
            content: "제목\n===\n부제목\n---\n"
            + "# 글머리1\n## 글머리2\n***\n"
            + "- 목록\n - 목록\n - 목록\n   - 목록\n"
            + "1. 목록\n2. 목록\n3. 목록\n"
            + "\n```javascript\nvar test: function(args) {\n  alert('tset');\n};\n```\n"
            + "[Markdown](https://guides.github.com/features/mastering-markdown/)\n\r"
            + "*하나는이탤릭* **두개는두껍게** ***세개는합체라*** ~~카더라~~\n"
            + "> 이메일\n>> 전달\n>>> 답장\n\r"
            + "First Header | Second Header\n"
            + "------------ | -------------\n"
            + "Content from cell 1 | Content from cell 2\n"
            + "Content in the first column | Content in the second column\n"
            + "ㅇㅇㅇ | ㄷㄷㄷ\n"
        },
        { id: 3, title: "세번째 메모", content: "세번째 메모 본문"},
        { id: 4, title: "ㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷㄷ", content: "ㄷㄷㄷㄷㅇㄷㄷㄷㄷㄷㄷㄷ\nasdfsddd\n\msdfasdfㅇㄷㅇㅇㅇㅇㅇㅇ" }
    ];

    constructor() { }

    get(id) {
        let find;
        this.posts.forEach(post => {
            if(post.id === Number(id)) {
                find = post;
                return;
            }
        });
        return of(find);
    }

    list() {
        return of(Object.values(this.posts).reverse());
    }

    create() {
        let newPost = { id: this.posts.length + 1, title: "제목 없음", content: "" };
        this.posts.push(newPost);
        return of(newPost);
    }

    save(post: Post) {
        let find;
        this.posts.forEach(p => {
            if(p.id == post.id) {
                p.title = this.getTitleOfContent(p.content);
                find = p;
                return;
            }
        });
        return of(find);
    }

    delete(post: Post) {
        this.posts.splice(this.posts.indexOf(post), 1);
        return of('ok');
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