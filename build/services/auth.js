"use strict";
var AuthService = /** @class */ (function () {
    function AuthService() {
    }
    AuthService.prototype.addUser = function (user) {
        this.admin = user;
        console.log("added user as admin");
    };
    return AuthService;
}());
module.exports = AuthService;
