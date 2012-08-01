var mongoose = require('mongoose'),
    Project = mongoose.model("Project");

module.exports = function (app, authMethod) {
    app.get('/projects', authMethod, function (req, res) {
        console.log("get all projects");
        res.send("get all projects");
    });

    app.get('/projects/:projectId', authMethod, function (req, res) {
        console.log("get project " + req.params.projectId);
        res.send("get project " + req.params.projectId);
    });

    app.post('/projects', authMethod, function (req, res) {
        console.log("post project");
        var project = new Project();
        project.title = "PE2E";
        project.createdDate = new Date();
        project.text = "USPTO Patents End to End";
        project.save(function (err) {
            if (err) {
                res.send("error");
            } else {
                res.send("project saved");
            }
        });
    });

    app.put('/projects/:projectId', authMethod, function (req, res) {
        console.log("update project " + req.params.projectId);
        res.send("update project " + req.params.projectId);
    });
};
