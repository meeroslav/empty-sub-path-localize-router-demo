import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyAboutComponent } from './lazy-about/lazy-about.component';
import { LocalizeRouterModule } from 'localize-router';

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
  imports: [
    RouterModule.forChild(routes),
    LocalizeRouterModule.forChild(routes)
  ],
  exports: [RouterModule, LocalizeRouterModule]
})
export class LazyModuleRoutingModule {
}
