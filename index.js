const express = require('express');

const app = express();
 
app.set("view engine", "ejs");
app.set("views", "./views");
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/',function (req,res) 
{
    res.render('index.ejs'); 
})
app.get('/index2',function (req,res) 
{
    res.render('index2.ejs'); 
})
app.get('/signin',function (req,res) 
{
    res.render('signin.ejs');   
})
app.get('/details1',function (req,res) 
{
    res.render('details1.ejs');   
})
app.get('/signup',function (req,res) 
{
    res.render('signup.ejs');   
})
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });
app.post('/signin',function (req,res) {
    const {Email, Password}=req.body;
    User.findByEmail(Email).then(function(found) {
        if(found && bcrypt.compareSync(Password,found.Password))
        {
            req.session.userid=found.id;
            res.redirect('/');
        }
        else
        {
            res.render('signin.ejs');
        }
    }).catch(next);
    
})

const port= process.env.POST || 3000;
app.listen(port);