let express = require ('express');
let app = express();
const path = require ('path');
let mongoose = require("mongoose");
var Schema = mongoose.Schema;



// staic route
app.use(express.static(path.join(__dirname, './public/dist')));

// body
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

// morgan
let morgan = require('morgan');
app.use(morgan('dev'));

// mongoose

let NoteSchema = new mongoose.Schema({
 note: { type: String, required: true },
 editable: { type: Boolean, required: true },
 // _post: {type: Schema.Types.ObjectId, ref: 'Post'},
 // created_at: {type: Date , required: true },
}, {timestamps: true });

mongoose.connect('mongodb://localhost/notes_db');
mongoose.model('Note', NoteSchema);
var Note = mongoose.model('Note');

// routes
app.get('/notes', (req,res,next) => {
  console.log("Server > GET 'users' ");
  Note.find({}, (err,notes) => {
    if(err) {
      console.log('something went wrong in GET users');
    }
    else {
      console.log('successfull!');
      // res.render('index', {posts:posts});
      return res.json(notes);
    }
 })
})

app.post('/notes', (req,res,next) => {
  delete req.body._id;
  console.log("Server > POST 'users' ", req.body);
  Note.create(req.body, (err,note) => {
    if(err) {
      console.log("error in create");
      return res.json(err)
    }
    else{
      console.log("success in post create");
      return res.json(note)
    };

    })
  })

app.delete("/notes/:id" ,(req,res,next) => {
  console.log("Server > Delete '/users/:id' > id:", req.params.id);
  Note.deleteOne({_id:req.params.id}, (err,data) => {
    if(err) {
      console.log("error in DELETE");
      return res.json(err)
    }
    else{
      console.log("success in Delete");
      return res.json(true)
    };

    })
  })

app.put("/notes/:id" , (req,res,next) => {
  console.log("Server > EDIT '/users/:id' > id:", req.params.id);
  Note.update({_id:req.params.id} , req.body , (err,data) =>{
    if (err){
      console.log("error in EDIT");
      return res.json(err)
  }
  else
    {
      console.log("success in EDIT");
      return res.json(true)
    };
  })
})

app.all("*", (req,res,next) => {
  res.sendfile(path.resolve("./public/dist/index.html"))
})


//listinengin port
app.listen(8000, function() {
    console.log("listening on port 8000");
})
