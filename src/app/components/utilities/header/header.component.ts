import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild, inject } from '@angular/core';
import { ThemesService } from 'src/app/services/themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // Dependancy injection
  _themeService: ThemesService = inject(ThemesService);

  changeTheme() : void {
    this._themeService.changeTheme();
  }

}
