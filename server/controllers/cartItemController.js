import cartItemModel from '../models/cartItemModel.js'

export const addToCart = async (req, res) => {
    try {
        const { userId, productId, name, imageUrl, price, size, quantity } = req.body;

        const existingItem = await cartItemModel.findOnde({ userId, productId, size });

        if (existingItem) {
            existingItem.quantity += quantity || 1;
            await existingItem.save();
            return res.status(200).json({ message: "Item Quantity Increased", cartItem: existingItem });
        }

        const newCartItem = await cartItemModel.create({
            userId,
            productId,
            name,
            imageUrl,
            price,
            size,
            quantity: quantity || 1

        });

        return res.status(200).json({ message: "Item Added To Cart", cartItem: newCartItem });
    } catch (error) {
        return res.status(500).json({ message: "Error Occured While Adding To Cart", error });
    }

}



export const getCartItem = async (req, res) => {
    try {
        const { userId } = req.params;

        const cartitems = await cartItemModel.findOnde({ userId });
        return res.status(200).json({ cartitems });

    } catch (error) {
        return res.status(500).json({ message: "Error Occured While Fetching The Card Item", error });
    }
}


export const updateCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;

        const updatedItem = await cartItemModel.findByIdAndUpdate(id, updates, { new: true });

        res.status(200).json({ message: "Cart item updated", cartItem: updatedItem });
    } catch (error) {
        res.status(500).json({ message: "Error updating cart item", error });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { id } = req.params;

        await cartItemModel.findByIdAndDelete(id);

        res.status(200).json({ message: "Item removed from cart" });
    } catch (error) {
        res.status(500).json({ message: "Error removing cart item", error });
    }
};