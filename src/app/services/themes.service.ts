import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemesService {

  // Universal theme trigger
  isDarkMode = signal(true);

  changeTheme() : void {
    this.isDarkMode.set(!this.isDarkMode());
  }

}
