import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss']
})
export class CreateCourseComponent implements OnInit  {
  htmlContent = '';
  Chapters = [0]
  titleArr: any = [];
  videoArr: any = [];

  constructor() { }

  ngOnInit(): void {
    // const storageData: any = localStorage.getItem('ChapterData')
    // const localData: any = JSON.parse(storageData)
    // if(localData){
    //   this.Chapters = [...localData]
    // }
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
  
  ChapterIncrease(){
    const newData = this.Chapters.length + 1
    this.Chapters.push(newData)
    // localStorage.setItem('ChapterData', JSON.stringify(this.Chapters))
  }
  VideoInrease(){

  }

  OnChangeHandler(events: any){
    const name = events.target.name;
    let nameVal = events.target.value
    
    const newObj: any = {}
    newObj['Chapter'] = name
    newObj['Title'] = nameVal;

    this.titleArr.push(newObj)

  }
  OnVideoChangeHandler(events: any){
    const name = events.target.name
    const videos = events.target.files;
    const newObj: any = {}
    newObj['Chapter'] = name
    newObj["Videos"] = videos;
    this.videoArr.push(newObj)
  }
  SubmitHandler(){
    console.log(this.titleArr)
    console.log(this.videoArr)
  }
}
