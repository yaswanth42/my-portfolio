const Contact = require('../models/Contact');

const createContact = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: 'Please provide all fields' });
    }

    try {
        const contact = await Contact.create({
            name,
            email,
            message,
        });

        res.status(201).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error, please try again later.' });
    }
};

module.exports = {
    createContact,
};
