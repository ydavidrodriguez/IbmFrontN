import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{LoginComponent}from './Views/Login/login/login.component';
import{DashboardComponent}from './Views/Dashboard/Dashboard.component';
import { ToolbarComponent } from './Plantillas/toolbar/toolbar.component'
import { UserComponent } from './Views/user/user.component';
import { RegisterTimeComponent } from './Views/register-time/register-time.component';
import { HistoryComponent } from './Views/history/history.component';
import { AprovveTimeComponent } from './Views/aprovve-time/aprovve-time.component';
import { ParametersComponent } from './Views/parameters/parameters.component';
import { RegistersComponent } from './Views/registers/registers.component';


const routes: Routes = [

{path:'',redirectTo:'login',pathMatch:'full'},
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'toolbar',component:ToolbarComponent},
{path:'user',component:UserComponent},
{path:'resgitertime',component:RegisterTimeComponent},
{path:'history',component:HistoryComponent},
{path:'aproveetime',component:AprovveTimeComponent},
{path:'parameters',component:ParametersComponent},
{path:'registers',component:RegistersComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent,
  DashboardComponent,
  ToolbarComponent,
  UserComponent,
  RegisterTimeComponent,
  HistoryComponent,
  AprovveTimeComponent,
  ParametersComponent,
  RegistersComponent]
