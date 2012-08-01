var mongoose = require('mongoose'),
    User = mongoose.model("User");

module.exports = function (app) {
    app.post('/session/new', function (req, res) {
        console.log("attempted login as " + req.body.email);
        User.findOne({ email: req.body.email }, function(err, user) {
            if (err) {
                res.send("bad email");
                console.log("failure: bad email"); 
            } else {
                if (user && user.authenticate(req.body.password)) {
                    console.log("success: " + user.id); 
                    req.session.userId = user.id;
                    res.send(JSON.stringify(user));
                } else {
                    console.log("failure: bad password"); 
                    res.send("bad password");
                }
            }
        }); 
    });

    app.del('/session/logout', function (req, res) {
        if (req.session) {
            req.session.destroy(function() {})
            res.send("logged out");
            console.log("User logged out");
        } else {
            res.send("can't log out");
        }
    });
};
