import { createUserService, loginUserService, updateUserService } from "../services/userService.js";

const createUser = async (req, res) => {
    const { userName, sureName, lastName, mail, password } = req.body;

    const userData = {
        userName, 
        sureName, 
        lastName, 
        mail, 
        password
    }

    try {
        const user = await createUserService(userData);
        res.json(user);
    } catch(err) {
        res.json(err);
    }
};

const loginUser = async (req, res) => {
    const { mail, password } = req.body;
    
    const userData = {
        mail, 
        password
    }

    try {
        const loginToken = await loginUserService(userData);
        
        res.json({loginToken});
    } catch(err) {
        res.json(err);
    }
};

const updateUser = async (req, res) => {
    try {
        const { userName, sureName, lastName, mail, password } = req.body;
        const id = req.params.id;
        const user = req.user;
        
        const userData = { userName, sureName, lastName, mail, password };
        const userOldData = {  id: user.id, userName: user.userName, sureName: user.sureName, lastName: user.lastName, mail: user.mail, password: user.password };

        const updateUserData = await updateUserService(id, userOldData, userData);
        res.json(updateUserData);
    } catch(err) {
        res.json(err);
    }
};

export { createUser, loginUser, updateUser };