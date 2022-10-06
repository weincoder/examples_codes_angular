"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumUseCases = void 0;
class GetAlbumUseCases {
    constructor(_albumGateWay) {
        this._albumGateWay = _albumGateWay;
    }
    getAlbumById(id) {
        // TODO: En este sitio podríamos manejar las configuraciones 
        // en cache
        return this._albumGateWay.getByID(id);
    }
    getAllAlbum() {
        return this._albumGateWay.getAll();
    }
}
exports.GetAlbumUseCases = GetAlbumUseCases;
