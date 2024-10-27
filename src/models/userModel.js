import { db } from "../config/db.js";

const User = {
    create: async (userData) => {
        const { userName, sureName, lastName, mail, password, role } = userData;

        const query = "INSERT INTO users (userName, sureName, lastName, mail, password, role) VALUES (?, ?, ?, ?, ?, ?)";

        const [result] = await db.execute(query, [userName, sureName, lastName, mail, password, role]);

        return { id: result.insertId, userName, mail };
    },

    getUserByEmail: async (mail) => {
        const query = "SELECT * FROM users WHERE mail = ?";

        const [result] = await db.execute(query, [mail]);
        
        return result[0];
    },

    updateUser: async (updateUserData) => {
        const { id, userName, sureName, lastName, mail, password } = updateUserData;

        const query = "UPDATE users SET userName = ?, sureName = ?, lastName = ?, mail = ?, password = ? WHERE id = ?";

        const [result] = await db.execute(query, [userName, sureName, lastName, mail, password, id]);

        if (result.affectedRows > 0) {
            return { message: 'User updated successfully', status: 'OK' };
        } else {
            return { message: 'User not found', status: 'Error' };
        }
    }
}

export { User };