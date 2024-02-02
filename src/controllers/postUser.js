const { User } = require("../db");

const postUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if(!username || !email || !password) {
            return res.status(200).json("Por favor completa los campos requeridos.")
        }

        const newUser = await User.findOrCreate({
            where: {username: username, email: email, password: password}
        });

        return res.status(201).json(newUser)

    } catch (error) {
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ error: error.errors[0].message });
        } else {
            return res.status(500).json({ error: error.message });
        }
    }
};
module.exports = postUser;