var mongoose = require('mongoose'),
    Sprint = mongoose.model("Sprint");

module.exports = function (app, authMethod) {
    app.get('/sprints', authMethod, function (req, res) {
        console.log("get all sprints");
        res.send("get all sprints");
    });

    app.get('/sprints/:sprintId', authMethod, function (req, res) {
        console.log("get sprint " + req.params.sprintId);
        res.send("get sprint " + req.params.sprintId);
    });

    app.post('/sprints', authMethod, function (req, res) {
        console.log("post sprint");
        var sprint = new Sprint();
        sprint.title = "Sprint 1";
        sprint.createdDate = new Date();
        sprint.startDate = new Date();
        sprint.endDate = new Date();
        sprint.modifiedDate = new Date();
        sprint.text = "First sprint";
        sprint.save(function (err) {
            if (err) {
                res.send("error");
            } else {
                res.send("sprint saved");
            }
        });
    });

    app.put('/sprints/:sprintId', authMethod, function (req, res) {
        console.log("update sprint " + req.params.sprintId);
        res.send("update sprint " + req.params.sprintId);
    });
};

