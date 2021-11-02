import { Component, OnInit } from '@angular/core';
// require('../../../assets/froala-editor/js/froala_editor.min.js')
// import FroalaEditor from 'froala-editor'
@Component({
  selector: 'ns-main-editor',
  templateUrl: './main-editor.component.html',
  styleUrls: ['./main-editor.component.css']
})
export class MainEditorComponent implements OnInit {

  webViewSrc = `<div id="editor" contenteditable="true">xxxxxxxxxxxxx xxxxx x x </div>`


  constructor() { }

  ngOnInit() {
    // Initialize editor.
    //  FroalaEditor('#edit');
    // console.log("FR===>>", FroalaEditor)
  }

}
