
import { Album } from 'core-weincode/lib/domain';
import { AlbumGateway } from 'core-weincode/lib/domain';
import { Observable } from 'rxjs';

const fetch = require('node-fetch');

export class AlbumApiService extends AlbumGateway {
    private _url = 'https://jsonplaceholder.typicode.com/albums/';
    getByID(id: string): Observable<Album> {
        const data$ = new Observable<Album>(observer => {
            fetch(this._url + id)
                .then((response: { json: () => any; }) => response.json())
                .then((data: Album) => {
                    observer.next(data);
                    observer.complete();
                })
                .catch((err: any) => observer.error(err));
        });
        return data$;
    }
    getAll(): Observable<Album[]> {
        throw new Error('Method not implemented.');
    }
    saveNew(_alb: Album): Observable<void> {
        throw new Error('Method not implemented.');
    }
}
