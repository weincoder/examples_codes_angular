import { Album } from 'core-weincode/lib/domain';
import { AlbumGateway } from 'core-weincode/lib/domain';
import { Observable } from 'rxjs';
export declare class AlbumApiService extends AlbumGateway {
    private _url;
    getByID(id: string): Observable<Album>;
    getAll(): Observable<Album[]>;
    saveNew(_alb: Album): Observable<void>;
}
