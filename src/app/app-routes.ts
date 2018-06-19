import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { LoginPage } from './components/login-page/login-page';

import { AuthGuard } from './guards/auth.guard';
import { NotAuthGuard } from './guards/notauth.guard';
import { DashboardComponent } from './components/dashboard/dashboard-component';

export const Approute:Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component : LoginPage, canActivate: [NotAuthGuard] },
  { path: 'dashboard', component : DashboardComponent, canActivate: [AuthGuard] },
]

