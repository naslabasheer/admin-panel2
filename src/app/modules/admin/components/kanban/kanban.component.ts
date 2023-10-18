import { Component, OnInit } from '@angular/core';
import {  moveItemInArray,
  transferArrayItem, CdkDragDrop}from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.css']
})
export class KanbanComponent implements OnInit {

  constructor() { }
  todo=['Write a release note', 'Create a graph of sketch', 'Enable analytics tracking ', ]
  inprogress=['ios Home Page', 'Top Nav Layout Design', 'Invite User to a Project', 'Check e-mail', ];
  review=['Kanban Board Desibgn','Code Html Email Template']
  done=['Brand Logo Design','Improve animation Loader']
  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
  ngOnInit(): void {
  }

}
