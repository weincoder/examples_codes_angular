import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Album } from 'src/app/domain/models/Album/album';
import {GetAlbumUseCases} from '../../../domain/usecase/get-album-use-case'

@Component({
  providers: [],
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss']
})
export class AlbumCardComponent implements OnInit {

  constructor(private _getAlbumUseCase : GetAlbumUseCases) { }
  response$: Observable<Album> | undefined ;
  datos: any;
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('12');
    this.response$.subscribe (
      (data) => {
        this.datos = data;
      }
    );
    
  }

}
