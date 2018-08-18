import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from './post.component';
import { PostViewComponent } from './post.view.component';
import { PostWriteComponent } from './post.write.component';

const postRoutes: Routes = [
    {
        path: '', component: PostComponent,
        children: [
            { path: '', redirectTo: '1', pathMatch: 'full' },
            { path: 'write', component: PostWriteComponent },
            { path: ':id', component: PostViewComponent }
        ]
    }
];

@NgModule({
    imports: [ RouterModule.forChild(postRoutes) ],
    exports: [ RouterModule ]
})
export class PostRoutingModule {
}
