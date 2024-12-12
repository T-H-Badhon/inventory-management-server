"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoutes = void 0;
const express_1 = require("express");
const product_controllers_1 = require("./product.controllers");
const router = (0, express_1.Router)();
router.post('/add', product_controllers_1.productControllers.addProduct);
router.get('/', product_controllers_1.productControllers.getAllProduct);
router.put('/update/:id', product_controllers_1.productControllers.updateProduct);
router.delete('/delete/:id', product_controllers_1.productControllers.deleteProduct);
exports.productRoutes = router;
