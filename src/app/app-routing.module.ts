import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LifecycleHooksComponent } from './components/pages/lifecycle-hooks/lifecycle-hooks.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Home'
  },
  {
    path: 'hooks',
    component: LifecycleHooksComponent,
    // loadComponent: () => import('./components/pages/lifecycle-hooks/lifecycle-hooks.component').then( hook => hook.LifecycleHooksComponent),
    title: 'Lifecycle Hooks'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
