import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/pages/home/home.component';
import { LoginComponent } from './modules/login/pages/login/login.component';
import { AuthGuardGuard } from './shared/guards/auth-guard.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuardGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
