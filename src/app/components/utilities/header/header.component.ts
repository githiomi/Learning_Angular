import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // To emit theme to parent
  @Output() themeEmitter = new EventEmitter<boolean>();

  isDarkMode : boolean = false;

  changeTheme() : void {
    this.isDarkMode = !this.isDarkMode;
    this.themeEmitter.emit(this.isDarkMode);
  }

}
