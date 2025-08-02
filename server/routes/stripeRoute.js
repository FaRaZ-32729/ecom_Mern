import express from 'express'
import { paymentApi } from '../middlewares/stripeMiddleware.js';
const router = express.Router();

router.post("/checkout" , paymentApi);


export default router;
