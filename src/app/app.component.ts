import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular Intro';

  isDarkMode : boolean = true;

  themeChanger(theme : boolean) : void {
    this.isDarkMode = theme;
  }

}