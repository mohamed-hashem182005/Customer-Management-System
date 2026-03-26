const mongoose = require('mongoose');
const validator = require('validator');


const customerSchema = new mongoose.Schema({
    fristName: {
        type: String,
        required: true,

    },
    lastName: {
        type: String,
        required: true,
    }, 
    details: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        validate: [validator.isEmail, 'Invalid email']
    },
    tel: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^(\+20|0)1[0125][0-9]{8}$/.test(v);
            },
            message: 'Invalid Phone number'
        }
    },
    createAtt: {
        type: Date,
        default: Date.now()

    },
    updateAt: {
        type: Date,
        default: Date.now()
    }
})



module.exports = mongoose.model('Customer', customerSchema);