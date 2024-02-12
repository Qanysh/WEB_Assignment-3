const mongoose = require('mongoose');

// Connection to mongo cloud database
mongoose.connect('mongodb+srv://Sepa:123@cluster0.wm7gtpf.mongodb.net/assignment-3').then(() => console.log('Connected to Database'));

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// User model
const User = new Schema({
    username: String,
    password: String,
    email: String,
    is_admin: Boolean
});

const UserModel = mongoose.model('User', User);

// Logs model
const Logs = new Schema({
    user: ObjectId,
    request_type: String,
    request_data: String,
    status_code: String,
    timestamp: Date,
    response_data: String
});

const LogsModel = mongoose.model('Logs', Logs);

// User ip model
const UserIp = new Schema({
    ip: String,
    user: ObjectId
});

const UserIpModel = mongoose.model('UserIp', UserIp);

// Exports
module.exports = {
    UserModel,
    LogsModel,
    UserIpModel
};