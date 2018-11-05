import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyAboutComponent } from './lazy-about/lazy-about.component';

const routes: Routes = [
  {
    path: '',
    component: LazyHomeComponent
  },
  {
    path: 'about',
    component: LazyAboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LazyModuleRoutingModule {
}
