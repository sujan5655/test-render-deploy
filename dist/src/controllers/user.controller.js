"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.getUsers = void 0;
const getUsers = (req, res) => {
    res.json({
        success: true,
        message: "List of users",
        data: [
            { id: 1, name: "Ram" },
            { id: 2, name: "Shyam" }
        ]
    });
};
exports.getUsers = getUsers;
const createUser = (req, res) => {
    const { name } = req.body;
    res.json({
        success: true,
        message: "User created",
        user: {
            id: Date.now(),
            name
        }
    });
};
exports.createUser = createUser;
