import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  constructor() { }
  files=[
    {filename:'App Design & Development	',lastmodified:'Jan 03, 2020 by Andrew',filesize:'128 MB',owner:'Danielle Thompson'},
    {filename:'Hyper-sketch-design.zip',lastmodified:'Feb 13, 2020 by Coderthemes',filesize:'521 MB',owner:'Coder Themes'},
    {filename:'Annualreport.pdf	',lastmodified:'Dec 18, 2019 by Alejandro',filesize:'7.2 MB',owner:'Gary Coley'},
    {filename:'Wireframes',lastmodified:'Nov 25, 2019 by Dunkle ',filesize:'54.2 MB',owner:'Jasper Rigg	'},
    {filename:'Documentation.docs',lastmodified:'Feb 9, 2020 by Justin',filesize:'8.3 MB',owner:'Cooper Sharwood'}]
  ngOnInit(): void {
  }

}
