import { userModel } from "../models/userModel.js";
import bcrypt from "bcryptjs"

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.status(409).json({ msg: "User Already Exists" });

        const encriptedPass = await bcrypt.hash(password, 10);

        const newUser = await userModel.create({
            name,
            email,
            password: encriptedPass
        });

        return res.status(201).json({ msg: "User Registered Successfully ", newUser });
    } catch (error) {
        return res.status(500).json({ msg: "error occured while creating user" });
    }
}