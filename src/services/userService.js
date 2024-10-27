import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createUserService = async (userData) => {
    const { userName, sureName, lastName, mail, password } = userData;

    const role = "user";
    const hashedPassword = await bcrypt.hash(password, 15);

    const newUserData = {
        userName, 
        sureName, 
        lastName, 
        mail, 
        password: hashedPassword, 
        role
    }

    return await User.create(newUserData);
};

const loginUserService = async (userData) => {
    const { mail, password } = userData;
    const secretKey = process.env.SecretKey;
    
    const user = await User.getUserByEmail(mail);
    
    const comparePassword = await bcrypt.compare(password, user.password);

    if(comparePassword){
        return await jwt.sign(user, secretKey, { expiresIn: '15d' });
    }
};

const updateUserService = async (id, user, userData) => {
    const { userName, sureName, lastName, mail, password } = userData;
    
    if (password) {
        var hashedPassword = await bcrypt.hash(password, 15);
    } else {
        password = user.password;
    }
    
    const updateUserData = {
        id,
        userName: user.userName && userName,
        sureName: user.sureName && sureName,
        lastName: user.lastName && lastName,
        mail: user.mail && mail,
        password: hashedPassword
    };
    
    return await User.updateUser(updateUserData);
};

export { createUserService, loginUserService, updateUserService };