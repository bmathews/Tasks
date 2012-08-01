var mongoose = require('mongoose'),
    Task = mongoose.model("Task");

module.exports = function (app, authMethod) {
    app.get('/tasks', authMethod, function (req, res) {
        Task.find({})
        .populate('author')
        .populate('sprint')
        .populate('assigned')
        .populate('project')
        .exec(function (err, doc) {
            if (err) {
                res.send("error " + JSON.stringify(err));
            } else {
                res.send(JSON.stringify(doc, null, 4));
            }
        });
        console.log("get all tasks");
    });

    app.get('/tasks/:taskId', authMethod, function (req, res) {
        console.log("get task " + req.params.taskId);
        var task = Task.find({_id: req.params.taskId})
        .populate('author')
        .populate('sprint')
        .populate('assigned')
        .populate('project')
        .exec(function (err, doc) {
            if (err) {
                res.send("error, couldn't find " + req.params.taskId);
            } else {
                res.send(JSON.stringify(task));
            }
        });
    });

    app.post('/tasks/new', authMethod, function (req, res) {
        console.log("post task");
        var task = new Task();
        task.author = req.body.author;
        task.sprint = req.body.sprint;
        task.assigned = req.body.assigned;
        task.project = req.body.project;
        task.title = req.body.title;
        task.text = req.body.text;
        task.createdDate = new Date();
        task.modifiedDate = new Date();
        task.dueDate = new Date();
        task.estimate = req.body.estimate;
        task.priority = req.body.priority;
        task.tags = req.body.tags;
        task.number = 1;
        task.status = req.body.status;
        task.save(function (err, doc) {
            if (err) {
                res.send("error");
            } else {
                res.send(JSON.stringify(doc));
            }
        });
    });

    app.post('/tasks/delete', authMethod, function (req, res) {
        console.log("deleting task: " + req.body.id);
        Task.find({_id: req.body.id}).remove();
        res.send("success");
    });

    app.put('/tasks/update', authMethod, function (req, res) {
        console.log("update task " + req.params.taskId);
        res.send("update task " + req.params.taskId);
    });
};



