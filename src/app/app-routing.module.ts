import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { LoginComponent } from './login/login.component';
import { SuperadminComponent } from './superadmin/superadmin.component';
import { DashboardComponent } from './superadmin/dashboard/dashboard.component';
import { HospitalComponent } from './superadmin/hospital/hospital.component';
import { AddHospitalComponent } from './superadmin/hospital/add-hospital/add-hospital.component';
import { AddBranchComponent } from './superadmin/hospital/add-branch/add-branch.component';
import { UsersComponent } from './superadmin/users/users.component';
import { ProsthesisComponent } from './superadmin/prosthesis/prosthesis.component';
import { OptionsComponent } from './superadmin/options/options.component';

// Our Array of Angular 2 Routes
const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent // Default Route
  },
  {
    path:'superadmin',
    component:SuperadminComponent,
   children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'hospital',
        component:HospitalComponent,
         children :[
            {
                path:'add-hospital',
                component:AddHospitalComponent
            },
            {
                path:'add-branch',
                component:AddBranchComponent
            }

        ]
      },
      {
       path: 'users',
       component: UsersComponent // Default Route
      },
      {
       path: 'prosthesis',
       component: ProsthesisComponent // Default Route
      },
       {
       path: 'options',
       component: OptionsComponent // Default Route
      },
      
    ]
  },
  
  { path: '**', 
    component: LoginComponent 
} // "Catch-All" Route
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }