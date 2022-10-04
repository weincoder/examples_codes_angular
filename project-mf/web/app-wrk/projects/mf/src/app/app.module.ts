import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AlbumApiService} from 'infraestructure-weincode/lib/driven-adapter';
import {GetAlbumUseCases} from 'core-weincode/lib/domain';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowmfComponent } from './showmf/showmf.component';
import { CircularProgressIndicatorComponent } from './common/circular-progress-indicator/circular-progress-indicator.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowmfComponent,
    
  ],
  exports: [],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [    AlbumApiService,
    {provide: GetAlbumUseCases, useClass: AlbumApiService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
