import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// TODO Http Interceptor
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

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
    providers: [CookieService],
    bootstrap: [AppComponent]
})
export class AppModule { }
