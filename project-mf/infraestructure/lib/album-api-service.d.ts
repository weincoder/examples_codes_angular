import { Album } from 'core-weincode/lib/models/album';
import { AlbumGateway } from 'core-weincode/lib/models/gateway/album-gateway';
import { Observable } from 'rxjs';
export declare class AlbumApiService extends AlbumGateway {
    private _url;
    getByID(id: string): Observable<Album>;
    getAll(): Observable<Album[]>;
    saveNew(_alb: Album): Observable<void>;
}
