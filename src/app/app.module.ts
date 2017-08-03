import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { HeaderComponent } from './superadmin/header/header.component';
import { FooterComponent } from './superadmin/footer/footer.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { SidebarComponent } from './superadmin/sidebar/sidebar.component';
import { HospitalComponent } from './superadmin/hospital/hospital.component';
import { UsersComponent } from './superadmin/users/users.component';
import { ProsthesisComponent } from './superadmin/prosthesis/prosthesis.component';
import { OptionsComponent } from './superadmin/options/options.component';
import { AddHospitalComponent } from './superadmin/hospital/add-hospital/add-hospital.component';
import { AddBranchComponent } from './superadmin/hospital/add-branch/add-branch.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperadminComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SidebarComponent,
    HospitalComponent,
    UsersComponent,
    ProsthesisComponent,
    OptionsComponent,
    AddHospitalComponent,
    AddBranchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
