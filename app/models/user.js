class User {
    constructor (id, user, name, bio){
        this._id = id;
        this._user = user;
        this._name = name;
        this._bio = bio;
        this._dataCreated = new Date();
        this._lastUpdated = new Date();
    }
    get getUser(){
        return this._user;
    }
    get getName(){
        return this._name;
    }
    get getId(){
        return this._id;
    }
    get getBio(){
        return this._bio;
    }


    set setUser(newUser){
        this._user = newuser;
    }
    set setName(newName){
        this._name = newName;
    }
    set setId(newId){
        this._id = newId;
    }
    set setBio(newBio){
        this._bio = newBio;
    }
}

module.exports = User;