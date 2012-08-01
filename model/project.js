var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    Project = new Schema({
        title: String,
        createdDate: Date,
        modifiedDate: Date,
        text: String
    });

mongoose.model("Project", Project);



