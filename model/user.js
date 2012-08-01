var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),

    User = new Schema({
        email: { 
            type: String, 
            validate: [function (email) {
                return !!email;
            }, 'an email is required'], 
            index: { 
                unique: true 
            } 
        },        
        hashed_password: String, 
        salt: String,
        createdDate: Date,
        modifiedDate: Date,
        firstName: String,
        lastName: String,
        displayName: String
    });

User.virtual('password')
    .set(function (password) {
        this._password = password;
        this.salt = this.makeSalt();
        this.hashed_password = this.encryptPassword(password);
    })
    .get(function () { 
        return this._password; 
    });

User.method('authenticate', function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
});

User.method('makeSalt', function () {
    return Math.round((new Date().valueOf() * Math.random())) + '';
});

User.method('encryptPassword', function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
});

User.pre('save', function (next) {
    if (!this.password) {
        next(new Error('password required'));
    } else {
        next();
    }
});

mongoose.model("User", User);
