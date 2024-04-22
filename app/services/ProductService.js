import Product from '../models/Product.js';

class ProductService {
    static async createProduct(product) {
        try {
            const { nome, descricao, categoria_id, latitude, longitude } = product;
            return await Product.createProduct(nome, descricao, categoria_id, latitude, longitude);
        } catch (err) {
            throw err;
        }
    }

    static async getProductById(id) {
        try {
            return await Product.getProductById(id);
        } catch (err) {
            throw err;
        }
    }

    static async getAllProducts() {
        try {
            return await Product.getAllProducts();
        } catch (err) {
            throw err;
        }
    }

    static async updateProduct(product) {
        try {
            const { nome, descricao, categoria_id, latitude, longitude } = product;
            return await Product.updateProduct(nome, descricao, categoria_id, latitude, longitude);
        } catch (err) {
            throw err;
        }
    }

    static async deleteProduct(id) {
        try {
            return await Product.deleteProduct(id);
        } catch (err) {
            throw err;
        }
    }
    
    static async searchProducts(stringSearch) {
        try {
            return await Product.searchProducts(stringSearch);
        } catch (err) {
            throw err;
        }
    }
}

export default ProductService;
