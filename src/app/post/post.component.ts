import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  // Message to parent
  postMessage:string = "Message coming from the post component.";

  // Message from parent
  @Input() AppMessage:string = "";

}
