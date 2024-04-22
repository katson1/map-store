import MapService from '../services/MapService.js';

class MapController {
    static async createMap(req, res) {
        try {
            const product = await MapService.createMap(req.body);
            res.status(201).send(product);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }

    static async getStoreMapById(req, res) {
        try {
            const product = await MapService.getStoreMapById(req.query.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
    static async getAllStoreMaps(req, res) {
        try {
            const products = await MapService.getAllStoreMaps();
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async updateStoreMap(req, res) {
        try {
            const products = await MapService.updateStoreMap(req.body);
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async deleteProduct(req, res) {

        try {
            const product = await MapService.deleteStoreMap(req.body.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
}

export default MapController;