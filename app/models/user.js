class User {
    constructor (id, user, name, bio){
        this._id = id;
        this._user = user;
        this._name = name;
        this._bio = bio;
        this._dataCreated = new Date();
        this._lastUpdated = new Date();
    }
}

module.exports = User;