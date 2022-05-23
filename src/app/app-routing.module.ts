import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

import { HomeComponent } from "./home/home.component";
import { ManageEntitiesComponent } from "./manage-entities/manage-entities.component";
import { SetupSemComponent } from "./setup-sem/setup-sem.component";
import { SchedulesComponent } from "./schedules/schedules.component";
import { LoginComponent } from "./login/login.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'manage',
    component: ManageEntitiesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'setup',
    component: SetupSemComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schedules',
    component: SchedulesComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
