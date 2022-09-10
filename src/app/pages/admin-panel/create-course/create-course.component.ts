import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit  {
  htmlContent = ''
  constructor() { }

  ngOnInit(): void {

  }
  config: AngularEditorConfig = {
    editable: true,
    uploadWithCredentials: false,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['uploadUrl', 'insertVideo', 'insertImage', 'clearFormatting', 'subscript', 'superscript', 'toggleEditorMode']
      ],
   
  };

  FieldIncreaseHandler(){
    
  }
}
