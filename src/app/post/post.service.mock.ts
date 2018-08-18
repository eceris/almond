import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable()
export class PostServiceMock {
    constructor() { }

    get(id: string) {
        return of({ content: "제목\n===\n부제목\n---\n"
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
        });
    }
}