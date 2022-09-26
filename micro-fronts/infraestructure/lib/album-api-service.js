"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlbumApiService = void 0;
const album_gateway_1 = require("core-weincode/lib/models/gateway/album-gateway");
const rxjs_1 = require("rxjs");
const fetch = require('node-fetch');
class AlbumApiService extends album_gateway_1.AlbumGateway {
    constructor() {
        super(...arguments);
        this._url = 'https://jsonplaceholder.typicode.com/albums/';
    }
    getByID(id) {
        const data$ = new rxjs_1.Observable(observer => {
            fetch(this._url + id)
                .then((response) => response.json()) // or text() or blob() etc.
                .then((data) => {
                observer.next(data);
                observer.complete();
            })
                .catch((err) => observer.error(err));
        });
        return data$;
    }
    getAll() {
        throw new Error('Method not implemented.');
    }
    saveNew(_alb) {
        throw new Error('Method not implemented.');
    }
}
exports.AlbumApiService = AlbumApiService;
