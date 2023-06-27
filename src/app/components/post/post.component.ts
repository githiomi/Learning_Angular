import { Component, Input, Output, EventEmitter, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements AfterViewInit {

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