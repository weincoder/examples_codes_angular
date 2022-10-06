import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { AlbumGateway } from '../models/gateway/album-gateway';
export declare class GetAlbumUseCases {
    private _albumGateWay;
    constructor(_albumGateWay: AlbumGateway);
    getByID(id: string): Observable<Album>;
    getAll(): Observable<Album[]>;
}
