"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const album_1 = require("../../src/models/album");
const get_album_use_case_1 = require("../../src/use_case/get-album-use-case");
const rxjs_1 = require("rxjs");
const album_gateway_1 = require("../../src/models/gateway/album-gateway");
(0, globals_1.test)('Test Album use case 🤣 ', () => {
    //Arrenge
    let fakeGetAlbumUseCase = new get_album_use_case_1.GetAlbumUseCases(new FakeApi());
    let expectedTitle = 'a little fake Album😂';
    //Act
    let getAlbumById$ = fakeGetAlbumUseCase.getAlbumById('12');
    getAlbumById$.subscribe((album) => {
        //Assert
        (0, globals_1.expect)(expectedTitle).toEqual(album.title);
    });
});
class FakeApi extends album_gateway_1.AlbumGateway {
    saveNew(_alb) {
        throw new Error('Method not implemented.');
    }
    getByID(id) {
        let fakeAlbum = new album_1.Album();
        fakeAlbum.id = 2;
        fakeAlbum.title = 'a little fake Album😂';
        fakeAlbum.userId = 14;
        let fakeAlbum$ = new rxjs_1.Observable();
        const myObserver = {
            error: (err) => console.error('Observer got an error: ' + err),
            complete: () => fakeAlbum,
        };
        fakeAlbum$.subscribe(myObserver);
        return fakeAlbum$;
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
}
