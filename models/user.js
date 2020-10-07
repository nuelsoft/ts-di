"use strict";
var User = /** @class */ (function () {
    function User(username, password) {
        this.username = username;
        this.password = password;
    }
    User.prototype.getPasswordString = function () {
        return this.password.replace(/.*/g, '****');
    };
    User.prototype.toString = function () {
        return "username -> " + this.username + " ::: password -> " + this.getPasswordString();
    };
    return User;
}());
module.exports = User;
