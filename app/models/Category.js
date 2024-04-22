import pool from '../../config/db.js';  // Assuming your database connection setup is exported as 'pool'

class Category {

    static async createCategory(nome, descricao) {
        const query = 'INSERT INTO categories (nome, descricao) VALUES ($1, $2) RETURNING *;';
        const values = [nome, descricao];
        try {
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async getCategoryById(id) {
        const query = 'SELECT * FROM categories WHERE id = $1;';
        try {
            const res = await pool.query(query, [id]);
            return res.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async getAllCategories() {
        const query = 'SELECT * FROM categories;';
        try {
            const res = await pool.query(query);
            return res.rows;
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async updateCategory(id, nome, descricao) {
        const query = 'UPDATE categories SET nome = $1, descricao = $2 WHERE id = $3 RETURNING *;';
        const values = [nome, descricao, id];
        try {
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async deleteCategory(id) {
        const query = 'DELETE FROM categories WHERE id = $1;';
        try {
            await pool.query(query, [id]);
            return { message: "Category deleted successfully." };
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async searchCategory(searchString) {
        const query = `
            SELECT *
            FROM categories as c
            WHERE c.nome ILIKE $1 OR c.descricao ILIKE $1;
        `;
        const values = [`%${searchString}%`]; // Wrap searchString with % for partial matching
        try {
            const { rows } = await pool.query(query, values);
            return rows;
        } catch (err) {
            console.error('Error searching for products', err.message);
            throw err;
        }
    }
    
}

export default Category;
