const asyncHandler = require('express-async-handler')
const User=require('../models/user');

module.exports=asyncHandler (async function auth(req,res,next) {
    const {userid}=req.session;
    res.locals.currentUser=null;
    if(userid)
    {
        const user= await User.findById(userid)
        if(user)
        {
            req.currentUser=user;
            res.locals.currentUser=user;
        }
        next();
    }else
    {next();}
    
});

router.get('/logout',function(req,res){
    delete req.session.userid;
    res.redirect('/');
});

