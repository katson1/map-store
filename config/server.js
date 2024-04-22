import express from "express";
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import processSwaggerDocuments from "./swagger.js";
import UserController from "../app/controllers/UserController.js";
import ProductController from "../app/controllers/ProductController.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const startServer = async () => {
    if (process.env.NODE_ENV === 'dev') {
        const { baseSwaggerDocument, aggregatedPaths } = processSwaggerDocuments();
        const aggregatedSwaggerDocs = {
            ...baseSwaggerDocument,
            paths: aggregatedPaths
        };

        app.use('/api-docs', swaggerUI.serve, (req, res, next) => {
            swaggerUI.setup(aggregatedSwaggerDocs)(req, res, next);
        });
    }

    app.use(express.urlencoded({ extended: true }));
    app.use(express.static('public'));
    app.use(express.json());
    app.post('/users', UserController.createUser);
    app.get('/users/:idOrEmail', UserController.getUser);

    app.post('/products', ProductController.createProduct);
    app.get('/products/:id', ProductController.getProduct);
    app.get('/products', ProductController.getAllProducts);
    app.put('/products', ProductController.updateProduct);
    app.delete('/products', ProductController.deleteProduct);
    app.post('/products/search', ProductController.searchProduct);

    app.use('/', (req, res) => {
        console.log('helloworld');
        res.send('Hello, world!');
    });

    app.listen(port, () => {
        console.log(`Server started on port ${port}`);
    });
};

export default startServer;