"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const album_1 = require("../../src/models/album");
(0, globals_1.test)('Test Album the hardest test xD 🤣 ', () => {
    //Arrenge
    let fakeAlbum = new album_1.Album();
    let expectedTitle = 'a little fake Album😂';
    //Act
    fakeAlbum.id = 2;
    fakeAlbum.title = expectedTitle;
    fakeAlbum.userId = 14;
    //Assert
    (0, globals_1.expect)(expectedTitle).toEqual(fakeAlbum.title);
});
