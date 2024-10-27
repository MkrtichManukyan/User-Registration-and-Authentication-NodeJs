import { db } from "../config/db.js";

const Admin = {
    updateRole: async (updateData) => {
        const { id, role } = updateData;

        const query = "UPDATE users SET role = ? WHERE id = ?";

        const [result] = await db.execute(query, [role, id]);

        if (result.affectedRows > 0) {
            return { message: 'User updated successfully', status: 'OK' };
        } else {
            return { message: 'User not found', status: 'Error' };
        }
    },

    getAllUser: async () => {
        const query = "SELECT id, userName, sureName, lastName, mail, role FROM users";

        const [result] = await db.execute(query);
        
        return result;
    }
}

export { Admin };