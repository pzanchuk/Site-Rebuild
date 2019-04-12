import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewAdComponent } from './new-ad/new-ad.component';





const appRoutes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'create-ad',
    component: NewAdComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
