import { productModel } from "../models/productModel.js";

export const addProduct = async (req, res) => {
    const { name, smallDescription, detail, starRating, reviews, category, sizes } = req.body;
    const picture = req.file ? `/images/${req.file.filename}` : null;
    try {
        if (!name || !smallDescription || !detail || !starRating || !reviews || !category || !sizes || !picture) {
            return res.status(400).json({ msg: "All Fields Are Required" })
        }
        const newProduct = await productModel.create({
            name,
            smallDescription,
            detail,
            starRating,
            reviews,
            category,
            sizes,
            imageUrl: picture
        });

        return res.status(201).json({ msg: "Product Added Successfully ", NewProduct: newProduct });

    } catch (error) {
        return res.status(500).json({ msg: "Error Occured While Creating New Product" });
    }
}


export const getAllProducts = async (req, res) => {
    try {
        const allProducts = await productModel.find();
        return res.status(201).json({ allProducts });
    } catch (error) {
        return res.status(500).json({ msg: "Error Occurred While Fetching Products", error: error.message });
    }
};


export const getSingleProduct = async (req, res) => {
    try {
        const singleProduct = await productModel.findById(req.params.id);
        return res.status(200).json({ singleProduct });
    } catch (error) {
        return res.status(500).json({ msg: "Error Occurred While Fetching Room", error: error.message });
    }
};


export const updateProduct = async (req, res) => {
    try {
        const _id = req.params.id;
        const updates = req.body;
        const picture = req.file ? `/images/${req.file.filename}` : null;

        if (picture) {
            updates.imageUrl = picture;
        }

        const updatedProduct = await productModel.findByIdAndUpdate(_id, updates, { new: true });

        if (!updatedProduct) {
            return res.status(404).json({ msg: "Product Not Found" });
        }

        return res.status(200).json({ msg: "Product Updated Successfully", updatedProduct });
    } catch (error) {
        return res.status(500).json({ msg: "Error Occurred While Updating Product" });
    }
};


export const deleteProduct = async (req, res) => {
    const _id = req.params.id;
    try {
        const deletedProduct = await productModel.findByIdAndDelete(_id);
        if (!deletedProduct) {
            return res.status(404).json({ msg: "Product Not Found" });
        }
        return res.status(200).json({ msg: "Product Deleted Successfully" });
    } catch (error) {
        return res.status(500).json({ msg: "Error Occurred While Deleting Product" });
    }
};