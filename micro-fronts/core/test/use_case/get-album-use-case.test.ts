

import { describe, expect, test } from '@jest/globals';
import { Album } from '../../src/album/models/album';
import { GetAlbumUseCases } from '../../src/album/use_case/get-album-use-case';
import { Observable } from 'rxjs';
import { AlbumGateway } from '../../src/album/models/gateway/album-gateway';
test('Test Album use case 🤣 ', async () => {
    //Arrenge
    let fakeGetAlbumUseCase = new GetAlbumUseCases(new FakeApi());
    let expectedTitle = 'consequatur autem doloribus natus consectetur';
    //Act
    let getAlbumById$ = await fakeGetAlbumUseCase.getAlbumById('12');
    getAlbumById$.subscribe((album) => {
        //Assert
        console.log(album)
    })

});

class FakeApi extends AlbumGateway {
    saveNew(_alb: Album): Observable<void> {
        throw new Error('Method not implemented.');
    }

    getByID(id: String): Observable<Album> {
        let fakeAlbum = new Album();
        fakeAlbum.id = 2;
        fakeAlbum.title = 'a little fake Album😂';
        fakeAlbum.userId = 14;
        let fakeAlbum$ = new Observable<Album>();
        const myObserver = {
            error: (err: Error) => console.error('Observer got an error: ' + err),
            complete: () => fakeAlbum,
        };
        fakeAlbum$.subscribe(myObserver);
        return fakeAlbum$;
    }
    getAll(): Observable<Album[]> {
        throw new Error('Method not implemented.');
    }

}