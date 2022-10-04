import { Component, OnInit } from '@angular/core';
import { GetAlbumUseCases, Album } from 'core-weincode/lib/domain'
import { delay, Observable } from 'rxjs';
@Component({
  selector: 'app-showinfo',
  templateUrl: './showinfo.component.html',
  styleUrls: ['./showinfo.component.scss']
})
export class ShowinfoComponent implements OnInit {

  constructor(private _getAlbumUseCase: GetAlbumUseCases) {

  }
  response$ ;
  datos = new Album();
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getByID('12');
    this._getAlbumUseCase.getByID('12').pipe(delay(2000)).subscribe((data: any) => {
      this.datos = data;
    });

  }


}
