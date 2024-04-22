import pool from '../../config/db.js';  // Assuming your database connection setup is exported as 'pool'

class User {
    static async create(userData) {
        const { name, email } = userData;
        const query = 'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *';
        const values = [name, email];
        try {
            const { rows } = await pool.query(query, values);
            return rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async findByEmail(email) {
        const query = 'SELECT * FROM users WHERE email = $1';
        try {
            const { rows } = await pool.query(query, [email]);
            return rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    static async findById(userId) {
        const query = 'SELECT * FROM users WHERE id = $1';
        try {
            const { rows } = await pool.query(query, [userId]);
            return rows[0];
        } catch (err) {
            throw new Error(err.message);
        }
    }

    // Additional methods can be defined here as needed
}

export default User;
