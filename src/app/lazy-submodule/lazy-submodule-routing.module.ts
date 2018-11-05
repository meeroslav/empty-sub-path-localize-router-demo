import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazySubHomeComponent } from './lazy-sub-home/lazy-sub-home.component';
import { LazySubAboutComponent } from './lazy-sub-about/lazy-sub-about.component';

const routes: Routes = [
  {
    path: '',
    component: LazySubHomeComponent
  },
  {
    path: 'about',
    component: LazySubAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazySubmoduleRoutingModule {
}
