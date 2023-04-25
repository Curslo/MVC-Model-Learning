const app = express();

//middle-ware
//app.use(express.static('frontend'));
app.use(express.json());

//View engine
app.set('view engine', 'ejs');

//database
const dbUrl = "mongodb+srv://richardkisivii:Klmqj9EbULSLOwT1@cluster0.ugumyg6.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbUrl).then(() => console.log('Connected to the database'))

//server
const PORT = 4000;
app.listen(PORT, () => 
console.log(`Server Running on port: http://localhost:${PORT}`));


//routes
app.get('/', (req, res) => res.render('home'));
app.get('/garments', (req,res) => res.render('garments'))
app.use(authRoutes);