import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowmfComponent } from '../showmf/showmf.component';
import { ShowinfoComponent } from './showinfo.component';
import { ShowinfoModule } from './showinfo.module';

const routes: Routes = [{
  path:'',
  component:ShowinfoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowinfoRoutingModule { }
