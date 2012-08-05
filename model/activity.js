var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
   
    ActivityObject = {
        objectType: String,
        objectId: Schema.ObjectId,
        displayName: String,
        content: String
    },
 
    //based on activitystrea.ms spec
    Activity = new Schema({
        published: Date,
        verb: String,
        actor: {type: Schema.ObjectId, ref: 'User'},
        object: ActivityObject,
        target: ActivityObject,
        streams: [String]
    });

mongoose.model("Activity", Activity);



