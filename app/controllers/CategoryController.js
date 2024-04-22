import CategoryService from '../services/CategoryService.js';

class CategoryController {
    static async createCategory(req, res) {
        try {
            const product = await CategoryService.createCategory(req.body);
            res.status(201).send(product);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }

    static async getCategoryById(req, res) {
        try {
            const product = await CategoryService.getCategoryById(req.query.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
    static async getAllCategories(req, res) {
        try {
            const products = await CategoryService.getAllCategories();
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async updateCategory(req, res) {
        try {
            const product = await CategoryService.updateCategory(req.body);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }

    static async deleteCategory(req, res) {
        try {
            const product = await CategoryService.deleteCategory(req.body.id);
            res.status(200).send(product);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
    
    static async searchCategory(req, res) {
        try {
            const products = await CategoryService.searchCategory(req.body.search);
            res.status(200).send(products);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
}

export default CategoryController;