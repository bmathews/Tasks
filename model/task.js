var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    Task = new Schema({
        author: { type: Schema.ObjectId, ref: 'User' },
        sprint: { type: Schema.ObjectId, ref: 'Sprint' },
        assigned: [ { type: Schema.ObjectId, ref: 'User' } ],
        project: { type: Schema.ObjectId, ref: 'Project' },
        title: String,
        text: String,
        createdDate: Date,
        estimate: Number,
        modifedDate: Date,
        dueDate: Date,
        priority: { type: String, enum: ['High', 'Medium', 'Low'] },
        tags: [String],
        number: Number,
        status: { type: String, enum: ['Active', 'Resolved', 'Closed'] }
    });

mongoose.model("Task", Task);
