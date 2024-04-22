import Category from '../models/Category.js';

class CategoryService {
    static async createCategory(categoryData) {
        try {
            const { nome, descricao } = categoryData;
            return await Category.createCategory(nome, descricao);
        } catch (err) {
            throw err;
        }
    }
    
    static async getCategoryById(id) {
        try {
            return await Category.getCategoryById(id);
        } catch (err) {
            throw err;
        }
    }

    static async getAllCategories() {
        try {
            return await Category.getAllCategories();
        } catch (err) {
            throw err;
        }
    }

    static async updateCategory(categoryData) {
        try {
            const { id, nome, descricao } = categoryData;
            return await Category.updateStoreMap(id, nome, descricao);
        } catch (err) {
            throw err;
        }
    }

    static async deleteCategory(id) {
        try {
            return await Category.deleteCategory(id);
        } catch (err) {
            throw err;
        }
    }

    static async searchCategory(searchString) {
        try {
            return await Category.searchCategory(searchString);
        } catch (err) {
            throw err;
        }
    }
}

export default CategoryService;
