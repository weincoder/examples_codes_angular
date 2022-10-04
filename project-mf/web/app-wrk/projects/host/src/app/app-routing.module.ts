import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'', component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'mf',
    loadChildren: () =>
      import('mf/ShowinfoModule').then((m) => m.ShowinfoModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
