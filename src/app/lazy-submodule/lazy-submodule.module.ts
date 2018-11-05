import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazySubHomeComponent } from './lazy-sub-home/lazy-sub-home.component';
import { LazySubAboutComponent } from './lazy-sub-about/lazy-sub-about.component';
import { LazySubmoduleRoutingModule } from './lazy-submodule-routing.module';

@NgModule({
  declarations: [LazySubHomeComponent, LazySubAboutComponent],
  imports: [
    CommonModule,
    LazySubmoduleRoutingModule
  ]
})
export class LazySubmoduleModule { }
