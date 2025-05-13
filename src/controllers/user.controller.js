const User = require('../models/user.model');

const userController = {
    getUserByEmail: async (req, res) => {
        const { email } = req.params;

        try {
            const user = await User.findOne({ email });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.status(200).json(user);

        } catch (err) {
            res.status(500).json({ message: 'Server error', error: err.message });
        }
    }
};

module.exports = userController;