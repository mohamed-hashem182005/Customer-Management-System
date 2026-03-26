const customerModel = require('../models/customer');
const mongoose = require('mongoose');

const homePage = async (req, res) => {
    const locals = {
        title: "Nodejs",
        description: "open sorce environment"
    }
    let perpage = 12;
    let page = parseInt(req.query.page || 1);

    try {
        const customerss = await customerModel.aggregate([{ $sort: { updateAt: 1 } }])
            .skip(perpage * page - perpage)
            .limit(perpage)
            .exec();
        const count = await customerModel.countDocuments();

        res.render('index', {
            locals,
            customerss,
            current: page,
            pages: Math.ceil(count / perpage),
            // },req.session.flash = {
            //     type: 'failed',
            //     message: 'Somethig is wrong'
            // })

        })
    } catch (error) {
        console.log("can not get customer", error.message);

    }
}

const addCustomer = async (req, res) => {
    const locals = {
        title: "Nodejs",
        description: "open sorce environment"
    }
    res.render('customer/add', locals);
}


const postCustomer = async (req, res) => {
    try {
       
        const newCustomer = new customerModel({
            fristName: req.body.fristName,
            lastName: req.body.lastName,
            tel: req.body.tel,
            email: req.body.email,
            details: req.body.details
        });

        const insertCorrect = await customerModel.create(newCustomer);

        if (!insertCorrect) {
            req.session.flash = {
                type: 'failed',
                message: 'Somethig is wrong'
            };

            console.log('data is not created');
        }
        
    console.log('data is created succssfully', newCustomer);
        // message of session
        req.session.flash = {
            type: 'success',
            message: 'Customer created successfully'
        };

        res.redirect('/');
    }
    catch (error) {
        console.log(error.message);
    }
    console.log(req.session.flash);
}


// get customer data
// view endpoint


const view = async (req, res) => {
    try {
        const customerId = await customerModel.findOne({ _id: req.params.id });
        const locals = {
            title: "View Customer Data",
            description: "Free open sorce environment"
        }
        res.render('customer/view', {
            locals,
            customerId
        })
    } catch (error) {
        console.log(error);

    }
}




const edit = async (req, res) => {
    try {
        const customerId = await customerModel.findOne({ _id: req.params.id });
        const locals = {
            title: "Edit Customer Data",
            description: "Free open sorce environment of User Management System"
        }
        res.render('customer/edit', {
            locals,
            customerId
        })
    } catch (error) {
        console.log(error);

    }
}



// update customer data

const editPost = async (req, res) => {
    try {
        await customerModel.findByIdAndUpdate(req.params.id, {
            fristName: req.body.fristName,
            lastName: req.body.lastName,
            email: req.body.email,
            tel: req.body.tel,
            details: req.body.details,
            updateAt: Date.now()
        })
        res.redirect(`/edit/${req.params.id}`)
    } catch (error) {
        console.log(error);

    }
}

// delete customer data 
const deletCustomer = async (req, res) => {
    try {
        const deletCustomer = await customerModel.deleteOne({ _id: req.params.id });
        if (!deletCustomer) {
            return req.session.flash = {
                type: 'falied',
                message: 'flaied to deleted'
            };

        }
        req.session.flash = {
            type: 'success',
            message: 'Customer deleted successfully  '
        };

        res.redirect('/')
    } catch (error) {
        console.log(error);

    }
}

// search customer data 
const searchCustomers = async (req, res) => {
    const locals = {
        title: "Search Customer Data",
        description: "Free open sorce environment of User Management System"
    }
    try {
        let searchTerm = req.body.searchTerm;
        const searchNoSpecialChar = searchTerm.replace(/[^a-zA-Z0-9]/g, '')
        const customers = await customerModel.find({
            $or: [
                {
                    fristName: { $regex: new RegExp(searchNoSpecialChar, 'i') }
                },
                {
                    lastName: { $regex: new RegExp(searchNoSpecialChar) }
                }
            ]
        });
        res.render('search', {
            customers,
            locals
        })
    } catch (error) {
        console.log(error);

    }
}
  

// about programer
const about = async (req, res) => {
    try {
        const locals = {
            title: "About",
            description: "Free open sorce environment of User Management System"
        }
        res.render('about',locals)
    } catch (error) {
        console.log(error);

    }
}




module.exports = {
    homePage,
    addCustomer,
    postCustomer,
    view,
    edit,
    editPost,
    deletCustomer,
    searchCustomers,
    about
}