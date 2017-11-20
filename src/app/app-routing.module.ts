// Importing Components and Angular Modules
import { NgModule                   } from '@angular/core';
import { Routes, RouterModule       } from '@angular/router';
import { LoginFormComponent         } from './components/login-form/login-form.component';
import { DashboardComponent         } from './components/dashboard/dashboard/dashboard.component';
import { SettingsComponent          } from './components/dashboard/settings/settings.component';
import { HomeComponent              } from './components/dashboard/home/home.component';
import { AuthGuardGuard             } from './guards/authGuard/auth-guard.guard';
import { UserComponent              } from './components/user/user.component';
import { PageNotFoundComponent      } from './components/page-not-found/page-not-found.component';

// Routes PAth and components call
const routes: Routes = [
  {path: '',            component: LoginFormComponent },
  {path: 'login',       component: LoginFormComponent },
  {path: 'users/:name', component: UserComponent        },
  {path: 'dashboard',   component: DashboardComponent, canActivate: [AuthGuardGuard] ,
    children: [  // Sub routes of dashbord example: `/dashboard/settingss`
      {path: '',          component: HomeComponent},
      {path: 'index',     component: HomeComponent},
      {path: 'settings',  component: SettingsComponent}
    ]},
  {path: '404',         component: PageNotFoundComponent },
  {path: '**',          component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
