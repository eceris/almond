import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TODO Http Interceptor
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpAuthInterceptor } from './http.auth.interceptor';

import { PostModule } from './post/post.module';
import { PostComponent } from './post/post.component';

@NgModule({
    declarations: [
        AppComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        PostModule,
        AppRoutingModule,
        HttpClientModule
    ],
    providers: [
        CookieService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpAuthInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
