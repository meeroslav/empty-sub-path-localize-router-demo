import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyHomeComponent } from './lazy-home/lazy-home.component';
import { LazyAboutComponent } from './lazy-about/lazy-about.component';
import { LazyModuleRoutingModule } from './lazy-module-routing.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [LazyHomeComponent, LazyAboutComponent],
  imports: [
    CommonModule,
    TranslateModule,
    LazyModuleRoutingModule
  ]
})
export class LazyModuleModule { }
