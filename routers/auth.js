const asyncHandler = require('express-async-handler')
const User=require('../models/user');

module.exports=function auth(req,res,next) {
    const {userid}=req.session;
    res.locals.currentUser=null;
    if(userid)
    {
        User.findById(userid).then(function(user) {
            if(user)
            {
                req.currentUser=user;
                res.locals.currentUser=user;
            }
        }).catch(next);
    }
    
};

router.get('/logout',function(req,res){
    delete req.session.userid;
    res.redirect('/');
});

