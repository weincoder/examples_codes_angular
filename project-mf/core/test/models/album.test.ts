
import {describe, expect, test} from '@jest/globals';
import {Album} from '../../src/album/models/album';
test('Test Album the hardest test xD 🤣 ', () => {
    //Arrenge
    let fakeAlbum = new Album();
    let expectedTitle = 'a little fake Album😂';
    //Act
    fakeAlbum.id = 2;
    fakeAlbum.title = expectedTitle;
    fakeAlbum.userId = 14;
    //Assert
    expect(expectedTitle).toEqual(fakeAlbum.title);
});