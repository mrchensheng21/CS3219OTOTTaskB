// Import contactModel
let Contact = require('./contactModel');

// Handle index actions
exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        res.json({
            status: "success",
            message: "Contacts retrieved successfully",
            data: contacts
        });
    });
};

// Handle create contact actions
exports.new = (req, res) => {
    let contact = new Contact();
    contact.name = req.body.name ? req.body.name : contact.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

// save the contact and check for errors
    contact.save((err) => {
        if (err)
           return res.json(err);
        res.json({
            message: 'New contact created!',
            data: contact
        });
    });
};

// Handle view contact info
exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err)
            return res.send(err);
        res.json({
            message: 'Contact Loaded',
            data: contact
        });
    });
};

// Handle update contact info
exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err)
            return res.send(err);
        contact.name = req.body.name ? req.body.name : contact.name;
        contact.gender = req.body.gender ? req.body.gender: contact.gender;
        contact.email = req.body.email ? req.body.email: contact.email;
        contact.phone = req.body.phone ? req.body.phone: contact.phone;
        // save the contact and check for errors
        contact.save((err) => {
            if (err)
                return res.json(err);
            res.json({
                message: 'Contact Info updated',
                data: contact
            });
        });
    });
};
// Handle delete contact
exports.delete = (req, res) => {
    Contact.remove({
        _id: req.params.contact_id
    }, (err, contact) => {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: "Contact deleted"
        });
    });
};