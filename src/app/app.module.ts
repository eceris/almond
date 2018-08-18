import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';
// TODO Http Interceptor
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { PostServiceMock } from './post/post.service.mock';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: PostService,
      useFactory(http: HttpClient) {
        return isDevMode() ? new PostServiceMock() : new PostService(http);
      },
      deps: [HttpClient]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
