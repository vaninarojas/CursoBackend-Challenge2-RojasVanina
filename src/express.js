import express from "express";
import ProductManager from "./challenge3.js";

const PORT = 3000;
const app = express();
const manager = new ProductManager("./src/products.json");

app.get("/products", async (req, res) => {
    try {
        const limit = parseInt(req.query.limit) || 0;
        const products = await manager.getProducts(limit);
        res.send({ status: 1, payload: products });
    } catch (error) {
        res.status(500).send({ status: 0, message: "Error al obtener los productos" });
    }
});

app.get("/products/:pid", async (req, res) => {
    try {
        const product = await manager.getProductById(req.params.pid);
        res.send({ status: 1, payload: product });
    } catch (error) {
        res.status(500).send({ status: 0, message: "Error al obtener el producto" });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor activo en puerto ${PORT}`);
});
