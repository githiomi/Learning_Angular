import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { PostItemComponent } from './components/post-item/post-item.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostItemComponent,
    LifecycleHooksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
