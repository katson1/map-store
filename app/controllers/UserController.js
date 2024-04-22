import UserService from '../services/UserService.js';

class UserController {
    static async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);
            res.status(201).send(user);
        } catch (err) {
            res.status(500).send({ error: err.message });
        }
    }

    static async getUser(req, res) {
        try {
            let user;
            if (Number(req.params.idOrEmail)) {
                user = await UserService.getUserById(req.params.idOrEmail);
            } else {
                user = await UserService.getUserByEmail(req.params.idOrEmail);
            }
            if (!user) {
                res.status(404).send({ error: 'User not found' });
            }
            res.status(200).send(user);
        } catch (err) {
            res.status(404).send({ error: 'User not found' });
        }
    }
}

export default UserController;