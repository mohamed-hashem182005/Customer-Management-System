require('dotenv').config();
const express = require('express');
const expressLayout = require('express-ejs-layouts');// to handle the layout of ejs 
const connectDb = require('./server/config/db')
const session = require('express-session');
const methodOverride = require('method-override');
const app = express();

//cnnect to dv
connectDb();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(express.static('public'));

//Exprss Session
app.use(
    session({
        secret: 'secrt',
        resave: false,
        saveUninitialized: true,
        cookie: {
            maxAge: 1000 * 60 * 60 * 24 * 7, //1 week
        }
    })
);

//flash Message
app.use((req, res, next) => {
    res.locals.flash = req.session.flash;
    delete req.session.flash;
    next();
});
// templating engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


//Routes
app.use('/',require('./server/routes/customer'))

    // Handle 404 page
// app.get(/.*/, (req, res) => {
//     res.status(404).render('partials/404');
// })
  
app.use((req, res) => {
    res.status(404).render('partials/404');
});











app.listen(process.env.PORT || 3000, () => {
    console.log('This server is running in port 3000');
    
})