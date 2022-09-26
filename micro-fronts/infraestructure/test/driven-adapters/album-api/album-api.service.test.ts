import { describe, expect, test } from '@jest/globals';
import { AlbumApiService } from '../../../src/driven-adapter/album-api/album-api-service'
import { Observable } from 'rxjs';

test('Test Album Api Service 🤣 ', done => {
    //Arrenge
    let fakeGetAlbumApi = new AlbumApiService();
    let expectedTitle = 'consequatur autem doloribus natus consectetur';
    //Act
    let getAlbumById$ =  fakeGetAlbumApi.getByID('12');

    getAlbumById$.subscribe((data) => {
        //Assert
        expect(expectedTitle).toEqual(data.title);
        done();
    })

});