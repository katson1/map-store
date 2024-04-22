import User from '../models/User.js';

class UserService {
    static async createUser(userData) {
        try {
            return await User.create(userData);
        } catch (err) {
            throw err;
        }
    }

    static async getUserByEmail(email) {
        try {
            return await User.findByEmail(email);
        } catch (err) {
            throw err;
        }
    }

    static async getUserById(userId) {
        try {
            return await User.findById(userId);
        } catch (err) {
            throw err;
        }
    }
}

export default UserService;
