import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { AuthGuard } from '../guard/auth.guard';

import { GpLayoutComponent, SimpleLayoutComponent } from '../containers';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'auth',
    component: SimpleLayoutComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('../views/login/login.module').then(m => m.LoginModule)
      }
    ]
  },
  {
    path: '',
    component: GpLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '_home',
        loadChildren: () => import('../views/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'expiration-files',
        loadChildren: () => import('../views/expiration-files/expiration-files.module').then(m => m.ExpirationFilesModule)
      },
      {
        path: 'govio-files',
        loadChildren: () => import('../views/govio-files/govio-files.module').then(m => m.GovioFilesModule)
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    { preloadingStrategy: PreloadAllModules, enableTracing: false }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
