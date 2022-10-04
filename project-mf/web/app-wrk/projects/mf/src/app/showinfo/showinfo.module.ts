import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowinfoRoutingModule } from './showinfo-routing.module';
import { ShowinfoComponent } from './showinfo.component';
import { AlbumApiService } from 'infraestructure-weincode/lib/driven-adapter';
import { GetAlbumUseCases } from 'core-weincode/lib/domain';
import { CircularProgressIndicatorComponent } from '../common/circular-progress-indicator/circular-progress-indicator.component';

@NgModule({
  declarations: [
    ShowinfoComponent,
    CircularProgressIndicatorComponent
    
  ],
  imports: [
    CommonModule,
    ShowinfoRoutingModule
  ],

  providers: [
    AlbumApiService,
    { provide: GetAlbumUseCases, useClass: AlbumApiService }],
})
export class ShowinfoModule { }
