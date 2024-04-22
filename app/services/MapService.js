import Map from '../models/Map.js';

class MapService {
    static async createMap(mapData) {
        try {
            const { descricao, imagem_base } = mapData;
            return await Map.createStoreMap(descricao, imagem_base);
        } catch (err) {
            throw err;
        }
    }

    
    static async getStoreMapById(id) {
        try {
            return await Map.getStoreMapById(id);
        } catch (err) {
            throw err;
        }
    }

    static async getAllStoreMaps() {
        try {
            return await Map.getAllStoreMaps();
        } catch (err) {
            throw err;
        }
    }

    static async updateStoreMap(mapData) {
        try {
            const { id, descricao, imagem_base } = mapData;
            return await Map.updateStoreMap(id, descricao, imagem_base);
        } catch (err) {
            throw err;
        }
    }

    static async deleteStoreMap(id) {
        try {
            return await Map.deleteStoreMap(id);
        } catch (err) {
            throw err;
        }
    }
}

export default MapService;
