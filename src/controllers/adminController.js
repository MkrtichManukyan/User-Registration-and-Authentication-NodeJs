import { updateRoleService, getAllUserService } from "../services/adminService.js";

const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const id = req.params.id;

        const updateUserRole = await updateRoleService(id, role);
        res.json(updateUserRole);
    } catch(err) {
        res.json(err);
    }
};

const getAllUser = async (req, res) => {
    try {
        const getUser = await getAllUserService();
        res.json({getUser});
    } catch(err) {
        res.json(err);
    }
};

export { updateUserRole, getAllUser };