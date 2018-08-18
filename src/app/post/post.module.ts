import { NgModule, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarkdownModule } from 'ngx-markdown';

import { PostRoutingModule } from './post-routing.module';

import { PostViewComponent } from './post.view.component';
import { PostWriteComponent } from './post.write.component';

import { PostService } from './post.service';
import { PostServiceMock } from './post.service.mock';

@NgModule({
    declarations: [
        PostViewComponent,
        PostWriteComponent
    ],
    imports: [
        PostRoutingModule,
        MarkdownModule.forRoot()
    ],
    providers: [
        {
            provide: PostService,
            useFactory(http: HttpClient) {
                return isDevMode() ? new PostServiceMock() : new PostService(http);
            },
            deps: [HttpClient]
        }
    ]
})
export class PostModule { }
