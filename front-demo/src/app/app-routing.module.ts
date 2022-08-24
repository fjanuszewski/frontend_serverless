import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'dashboard',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      { path: 'login',
        loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
      },
      { path: 'home',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      { path: '**',
        canActivate: [AuthGuard],
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
