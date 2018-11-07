import { Component } from '@angular/core';
import { LocalizeRouterService } from 'localize-router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private localize: LocalizeRouterService) {
    console.log('PARSER ROUTES', this.localize.parser.routes);
  }

  changeLanguage(lang: string) {
    this.localize.changeLanguage(lang);
  }
}
