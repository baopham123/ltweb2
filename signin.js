const express = require('express');

const app = express();
 
app.set("view engine", "ejs");
app.set("views", "./views");
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.get('/signin',function (req,res) 
{
    res.render('signin.ejs');   
})
app.get('/',function (req,res) 
{
    res.render('index.ejs'); 
})
app.get('/signup',function (req,res) 
{
    res.render('signup.ejs');   
})
app.post('/signin',function (req,res) {
    const user=req.body.Email;
    const psw=req.body.Password;
})

const port= process.env.POST || 3000;
app.listen(port);