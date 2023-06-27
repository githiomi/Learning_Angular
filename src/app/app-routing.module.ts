import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'home',
    component: PostComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
