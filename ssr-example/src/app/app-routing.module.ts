import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { VisionComponent } from './vision/vision.component';

const routes: Routes = [{
  path: 'info',
  component: InfoComponent
},
{
  path: 'vision',
  component: VisionComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
