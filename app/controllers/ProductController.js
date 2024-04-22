import ProductService from '../services/ProductService.js';

class ProductController {
    static async createProduct(req, res) {
        try {
            const product = await ProductService.createProduct(req.body);
            res.status(201).send(product);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }

    static async getProduct(req, res) {
        try {
            const product = await ProductService.getProductById(req.query.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
    static async getAllProducts(req, res) {
        try {
            const products = await ProductService.getAllProducts();
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async updateProduct(req, res) {
        try {
            const product = await ProductService.updateProduct(req.body);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async deleteProduct(req, res) {
        try {
            const product = await ProductService.deleteProduct(req.body.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
    static async searchProduct(req, res) {
        try {
            const products = await ProductService.searchProducts(req.body.search);
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
}

export default ProductController;