import { Component, inject } from '@angular/core';
import { ThemesService } from './services/themes.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Intro';

  // Dependancy injection
  _themesService : ThemesService = inject(ThemesService);

  isDarkMode : boolean = this._themesService.isDarkMode();

}