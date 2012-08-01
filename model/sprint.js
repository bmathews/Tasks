var mongoose = require('mongoose'),
    Schema = mongoose.Schema,

    Sprint = new Schema({
        title: String,
        endDate: Date,
        startDate: Date,
        createdDate: Date,
        modifiedDate: Date,
        text: String
    });

mongoose.model("Sprint", Sprint);


