import express from "express"
import ProductManager from "./challenge3.js";

const PORT = 3000;
const app = express();
const manager = new ProductManager("./src/products.json")

app.get("/products", async (req, res) =>{
    const limit = parseInt(req.query.limit) || 0;
const products = await manager.getProducts(limit);
res.send ({status: 1, payload: products});

});

app.get("/products/:pid", async (req, res) =>{
const product = await manager.getProductById (req.params.pid);

res.send ({status: 1, payload: product});

});

app.listen(PORT, () => {console.log(`Servidor activo en puerto ${PORT}`);});
