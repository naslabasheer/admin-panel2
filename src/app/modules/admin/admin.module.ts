import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { HeaderComponent } from './components/header/header.component';

import {MatIconModule} from '@angular/material/icon'
import {MatMenuModule} from '@angular/material/menu'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatFormFieldModule} from '@angular/material/form-field'

import { SidenavComponent } from './components/sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminHeaderComponent } from './components/admin-header/admin-header.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDatepickerModule} from '@angular/material/datepicker'

import {MatCardModule} from '@angular/material/card';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FolderComponent } from './components/folder/folder.component';
import { ExtrapagesComponent } from './components/extrapages/extrapages.component';
import { KanbanComponent } from './components/kanban/kanban.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
    AdminHeaderComponent,
    CalendarComponent,
    TicketsComponent,
    FolderComponent,
    ExtrapagesComponent,
    KanbanComponent,
   
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    DragDropModule
    
  ]
})
export class AdminModule { }
