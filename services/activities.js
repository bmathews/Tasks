var mongoose = require('mongoose'),
    Activity = mongoose.model("Activity");

module.exports = function (app, authMethod) {
    //all activities
    app.get('/activities', authMethod, function (req, res) {
        console.log("getting all activities");
        Activity.find()
        .sort('published', 'descending')
        .limit(10)
        .populate('actor')
        .exec(function (err, docs) {
            if (err) {
                console.log(JSON.stringify(err));
                res.send(JSON.stringify(err));                
            } else {
                console.log(JSON.stringify(docs));
                res.send(JSON.stringify(docs));
            }
        });
    });

    //specific activity
    app.get('/activities/:activityId', authMethod, function (req, res) {
        console.log("get activity " + req.params.activityId);
        res.send("get activity " + req.params.activityId);
    });
    
    //activity for stream from actor
    app.get('/activities/streams/:stream/actor/:id', authMethod, function (req, res) {
        console.log("finding actor: " + req.params.id + " in " + req.params.stream);
        Activity.find({streams:req.params.stream, actor:req.params.id})
        .sort('published', 'descending')
        .limit(10)
        .populate('actor')
        .exec(function (err, docs) {
            if (err) {
                console.log(JSON.stringify(err));
                res.send(JSON.stringify(err));                
            } else {
                console.log(JSON.stringify(docs));
                res.send(JSON.stringify(docs));
            }
        });
    });
    
    //activity by actor
    app.get('/activities/actor/:id', authMethod, function (req, res) {
        Activity.find({actor:req.params.id || req.session.userId})
        .sort('published', 'descending')
        .limit(10)
        .populate('actor')
        .exec(function (err, docs) {
            if (err) {
                console.log(JSON.stringify(err));
                res.send(JSON.stringify(err));                
            } else {
                console.log(JSON.stringify(docs));
                res.send(JSON.stringify(docs));
            }
        });
    });

    //activites by stream
    app.get('/activities/streams/:stream', authMethod, function (req, res) {
        Activity.find({streams:req.params.stream})
        .sort('published', 'descending')
        .limit(10)
        .populate('actor')
        .exec(function (err, docs) {
            if (err) {
                console.log(JSON.stringify(err));
                res.send(JSON.stringify(err));                
            } else {
                console.log(JSON.stringify(docs));
                res.send(JSON.stringify(docs));
            }
        });
    });

    //new activity
    app.post('/activities', authMethod, function (req, res) {
        console.log("post activity");
        var activity = new Activity();

        activity.published = Date.now;
        activity.verb = req.body.verb;
        activity.actor = req.session.userId;
        activity.object = req.body.object;
        activity.target = req.body.target;
        activity.streams = req.body.streams;
        
        activity.save(function (err) {
            if (err) {
                res.send("error");
            } else {
                res.send("activity saved");
            }
        });
    });

    //update activity
    app.put('/activities/:activityId', authMethod, function (req, res) {
        console.log("update activity " + req.params.activityId);
        res.send("update activity " + req.params.activityId);
    });
};
