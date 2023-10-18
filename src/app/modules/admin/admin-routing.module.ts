import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { FolderComponent } from './components/folder/folder.component';
import { ExtrapagesComponent } from './components/extrapages/extrapages.component';
import { KanbanComponent } from './components/kanban/kanban.component';

const routes: Routes = [
  {path:'',component:HeaderComponent,
  children:[
    {path:'dashboard',component:DashboardComponent},
 
  {path:'calendar',component:CalendarComponent},
  {path:'tickets',component:TicketsComponent},
  {path:'folder',component:FolderComponent},
  {path:'extrapages',component:ExtrapagesComponent},
  {path:'kanban',component:KanbanComponent},
  {path: '', redirectTo:'/admin/dashboard',pathMatch:'full'}
  ],},
 
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
