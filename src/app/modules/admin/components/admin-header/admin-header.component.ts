import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  EventEmitter:any
  @Output() toggleSlidebarForMe : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  togglesidebar(){
    this.toggleSlidebarForMe.emit();
      }


}
