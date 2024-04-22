import pool from '../../config/db.js';  // Assuming your database connection setup is exported as 'pool'

class Map {

    static async createStoreMap(descricao, imagem_base) {
        const query = 'INSERT INTO mapa_da_loja (descricao, imagem_base) VALUES ($1, $2) RETURNING *;';
        const values = [descricao, imagem_base];
        try {
            const res = await pool.query(query, values);
            return res.rows[0];
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async getStoreMapById(id) {
        const query = `SELECT id, descricao, imagem_base FROM mapa_da_loja WHERE id = $1;`;
        try {
            const { rows } = await pool.query(query, [id]);
            return rows[0];
        } catch (err) {
            console.error('Error retrieving store map', err.message);
            throw err;
        }
    }

    static async getAllStoreMaps() {
        const query = `SELECT id, descricao, imagem_base FROM mapa_da_loja;`;
        try {
            const { rows } = await pool.query(query);
            return rows;
        } catch (err) {
            console.error('Error retrieving all store maps', err.message);
            throw err;
        }
    }

    static async updateStoreMap(id, descricao, imagem_base) {
        const query = `UPDATE mapa_da_loja
                       SET descricao = $1, imagem_base = $2
                       WHERE id = $3
                       RETURNING *;`;
        const values = [descricao, imagem_base, id];
        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (err) {
            console.error('Error updating store map', err.message);
            throw err;
        }
    }

    static async deleteStoreMap(id) {
        const query = `DELETE FROM mapa_da_loja WHERE id = $1;`;
        try {
            await pool.query(query, [id]);
            return { message: "Store map deleted successfully." };
        } catch (err) {
            console.error('Error deleting store map', err.message);
            throw err;
        }
    }
    
    

}

export default Map;
