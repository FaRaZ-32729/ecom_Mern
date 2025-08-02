import Stripe from 'stripe'
import dotenv from 'dotenv';
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);



export const paymentApi = async (req, res) => {
    const { amount, cartItems } = req.body;
    // console.log(cartItems)

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: cartItems.map(item => ({
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100),
                },
                quantity: item.quantity,
            })),
               success_url: 'http://localhost:5173/success',
               cancel_url: 'http://localhost:5173/cancel',
        });

        res.send({ id: session.id });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// export const paymentApi = async (req, res) => {
//     const { amount } = req.body;

//     try {
//         const paymentIntent = await stripe.paymentIntents.create({
//             amount: amount * 100,
//             currency: 'usd',
//             automatic_payment_methods: { enabled: true },
//         });

//         res.send({ clientSecret: paymentIntent.client_secret });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

