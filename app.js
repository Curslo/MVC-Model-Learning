const  express = require('express');

const mongoose = require ('mongoose');

const app = express();

//middle-ware
//app.use(express.static('frontend'));

//View engine
app.set('frontend engine', 'ejs');

//database
const dbUrl = 'mongodb+srv://richardkisivii:Klmqj9EbULSLOwT1@cluster0.ugumyg6.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbUrl).then(() => console.log('Connected to the database'))

//server
const PORT = 4000;
app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));


//routes
app.get('/', (req, res) => res.render('home'));
app.get('/signup', (req,res) => res.render('signup'))