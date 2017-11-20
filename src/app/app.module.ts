import { BrowserModule            } from '@angular/platform-browser';
import { NgModule                 } from '@angular/core';
import { AppRoutingModule         } from './app-routing.module';
import { AppComponent             } from './app.component';
import { HeaderComponent          } from './components/header/header.component';
import { FooterComponent          } from './components/footer/footer.component';
import { LoginFormComponent       } from './components/login-form/login-form.component';
import { DashboardComponent       } from './components/dashboard/dashboard/dashboard.component';
import { SettingsComponent        } from './components/dashboard/settings/settings.component';
import { HomeComponent            } from './components/dashboard/home/home.component';
import { UserService              } from './services/userService/user.service';
import { AuthGuardGuard           } from './guards/authGuard/auth-guard.guard';
import { UserComponent            } from './components/user/user.component';
import { PageNotFoundComponent    } from './components/page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginFormComponent,
    DashboardComponent,
    SettingsComponent,
    HomeComponent,
    UserComponent,
     PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService, AuthGuardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
