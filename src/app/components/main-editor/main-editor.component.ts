import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ns-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css']
})
export class MainEditorComponent implements OnInit {

  webViewSrc = `<div id="editor" contenteditable="true">xxxxxxxxxxxxx xxxxx x x </div>`
   

  constructor() { }

  ngOnInit() {
  }

}
