import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  // Message to parent
  postMessage: string = "Message coming from the post component.";

  // Set up output 
  @Output() postOutputEmitter = new EventEmitter();

  // Message from parent
  @Input() AppMessage: string = "";

  ngAfterViewInit(): void {
    this.postOutputEmitter.emit(this.postMessage);
  }

}