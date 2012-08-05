var mongoose = require('mongoose'),
    User = mongoose.model("User");

module.exports = function (app, authMethod) {
    app.get('/users', authMethod, function (req, res) {
        console.log("get all users");
        User.find({}, function (err, docs) {
            if (err) {
                res.send(JSON.stringify(err));
            } else {
                res.send(JSON.stringify(docs));
            }
        });
    });

    app.get('/users/:userId', authMethod, function (req, res) {
        console.log("get user " + req.params.userId);
        res.send("get user " + req.params.userId);
    });

    app.post('/users/new', function (req, res) {
        console.log("post user");
        var user = new User();
        user.email = req.body.email;
        user.password = req.body.password;
        user.createdDate = new Date();
        user.modifiedDate = new Date();
        user.firstName = req.body.firstName;
        user.lastName = req.body.lastName;
        user.displayName = req.body.displayName;
        user.save(function (err) {
            if (err) {
                res.send("error");
                console.log("user create failed");
            } else {
                res.send("user saved");
                console.log("user saved");
            }
        });
    });

    app.put('/users/:userId', authMethod, function (req, res) {
        console.log("update user " + req.params.userId);
        res.send("update user " + req.params.userId);
    });
};


