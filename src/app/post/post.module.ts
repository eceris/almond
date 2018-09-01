import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule, isDevMode } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
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
        BrowserModule,
        CommonModule,
        FormsModule,
        PostRoutingModule,
        MarkdownModule.forRoot()
    ],
    providers: [
        PostService,
        {
            provide: PostService,
            useFactory(http: HttpClient) {
                return isDevMode() ? new PostServiceMock() : new PostService(http);
            },
            deps: [HttpClient]
        }
    ]
})
export class PostModule {
    
    private postEventSource = new Subject<string>();
    postEventObservable = this.postEventSource.asObservable();

    announce(event: string) {
        this.postEventSource.next(event);
    }
}
