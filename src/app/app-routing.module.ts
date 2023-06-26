import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './components/account/account.component';
import { PostComponent } from './components/post/post.component';

const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: '',
    component: PostComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
