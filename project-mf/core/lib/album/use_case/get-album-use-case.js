"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAlbumUseCases = void 0;
class GetAlbumUseCases {
    constructor(_albumGateWay) {
        this._albumGateWay = _albumGateWay;
    }
    getByID(id) {
        // TODO: En este sitio podríamos manejar las configuraciones 
        // en cache
        return this._albumGateWay.getByID(id);
    }
    getAll() {
        return this._albumGateWay.getAll();
    }
}
exports.GetAlbumUseCases = GetAlbumUseCases;
