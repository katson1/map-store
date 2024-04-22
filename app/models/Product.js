import pool from '../../config/db.js';  // Assuming your database connection setup is exported as 'pool'

class Product {

    static async createProduct(nome, descricao, categoria_id, latitude, longitude) {
        const query = 'INSERT INTO products (nome, descricao, categoria_id, latitude, longitude) VALUES ($1, $2, $3, $4, $5) RETURNING *;';
        const values = [nome, descricao, categoria_id, latitude, longitude];
        try {
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async getProductById(id) {
        const query = `SELECT * FROM products WHERE id = $1;`;
        try {
            const { rows } = await pool.query(query, [id]);
            return rows[0];
        } catch (err) {
            console.error('Error retrieving product', err.message);
            throw err;
        }
    }
    
    static async getAllProducts() {
        const query = `SELECT * FROM products;`;
        try {
            const { rows } = await pool.query(query);
            return rows;
        } catch (err) {
            console.error('Error retrieving all products', err.message);
            throw err;
        }
    }

    static async updateProduct(id, nome, descricao, categoria_id, latitude, longitude) {
        const query = `UPDATE products
                       SET nome = $1, descricao = $2, categoria_id = $3, latitude = $4, longitude = $5
                       WHERE id = $6
                       RETURNING *;`;
        const values = [nome, descricao, categoria_id, latitude, longitude, id];
        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (err) {
            console.error('Error updating product', err.message);
            throw err;
        }
    }
    
    static async deleteProduct(id) {
        const query = `DELETE FROM products WHERE id = $1;`;
        try {
            await pool.query(query, [id]);
            return { message: "Product deleted successfully." };
        } catch (err) {
            console.error('Error deleting product', err.message);
            throw err;
        }
    }

    static async searchProducts(searchString) {
        const query = `
            SELECT p.id, p.nome, p.descricao, p.categoria_id, p.latitude, p.longitude, c.nome as categoria_nome
            FROM products p
            INNER JOIN categories c ON p.categoria_id = c.id
            WHERE p.nome ILIKE $1 OR p.descricao ILIKE $1 OR c.nome ILIKE $1;
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

export default Product;
