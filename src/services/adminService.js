import { Admin } from "../models/adminModel.js";

const updateRoleService = async (id, role) => {
    const updateData = {
        id,
        role
    }

    return await Admin.updateRole(updateData);
}

const getAllUserService = async () => {
    return Admin.getAllUser();
}

export { updateRoleService, getAllUserService };