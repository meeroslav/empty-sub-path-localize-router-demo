import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/assets/locales/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    MainContainerComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [ HttpClient ]
      }
    }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
