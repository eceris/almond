import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Post } from './post';

@Injectable()
export class PostServiceMock {

    private posts = {
        "1": {
            id: "1", title: "첫번째 메모",
            content: "제목\n===\n부제목\n---\n"
            + "# 글머리1\n## 글머리2\n***\n"
            + "- 목록\n - 목록\n - 목록\n   - 목록\n"
            + "1. 목록\n2. 목록\n3. 목록\n"
            + "\n```javascript\nfunction(args) {\n  alert('tset');\n}\n```\n"
            + "[Markdown](https://guides.github.com/features/mastering-markdown/)\n\r"
            + "*하나는이탤릭* **두개는두껍게** ***세개는합체라*** ~~카더라~~\n"
            + "> 이메일\n>> 전달\n>>> 답장\n\r"
            + "First Header | Second Header\n"
            + "------------ | -------------\n"
            + "Content from cell 1 | Content from cell 2\n"
            + "Content in the first column | Content in the second column\n"
            + "ㅇㅇㅇ | ㄷㄷㄷ\n"
        },
        "2": { id: "2", title: "두번째 메모", content: "두번째 메모 본문"},
        "3": { id: "3", title: "세번째 메모", content: "삼삼사마삼사맛맛ㅁ"},
        "4": { id: "4", title: "네번째 메모", content: ""}
    };

    constructor() { }

    get(id: string) {
        return of(this.posts[id]);
    }

    list() {
        return of([
            { id: "1", title: "첫번째 메모" },
            { id: "2", title: "임시저장" },
            { id: "3", title: "DDDDDDDDDDDDDDDDDD" },
            { id: "4", title: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ" },
        ]);
    }

}