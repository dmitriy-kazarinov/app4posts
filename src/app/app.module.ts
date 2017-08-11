import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { DataService } from './services/data.service';
import { AboutComponent } from './components/about/about.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'post/:id', component: PostComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    AboutComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
