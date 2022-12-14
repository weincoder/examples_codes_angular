import { Observable } from 'rxjs';
import { Album } from '../models/album';
import { AlbumGateway } from '../models/gateway/album-gateway';
export declare class GetAlbumUseCases {
    private _albumGateWay;
    constructor(_albumGateWay: AlbumGateway);
    getAlbumById(id: string): Observable<Album>;
    getAllAlbum(): Observable<Album[]>;
}
