var fs = require('fs'),
    mongoose = require('mongoose'),
    db = mongoose.connect('mongodb://localhost/tasks'),
    express = require('express'),
    app = express.createServer(),
    authMethod;

app.use(express.methodOverride());
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: "keyboard cat" }));
app.use(app.router);
app.use(express.static('./static'));

authMethod = function (req, res, next) {
    if (req.session.userId) {
        next();
    } else {
        next(new Error("not authenticated"));
    }
};

//init models
fs.readdirSync('./model').forEach(function (path) {
    require('./model/' + path);
});

//init services
fs.readdirSync('./services').forEach(function (path) {
    require('./services/' + path)(app, authMethod);
});

app.listen(3000);
console.log("app started on 3000");
