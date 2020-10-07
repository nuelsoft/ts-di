"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var base_vm_1 = __importDefault(require("./base.vm"));
var user_1 = __importDefault(require("../models/user"));
var AuthVM = /** @class */ (function (_super) {
    __extends(AuthVM, _super);
    function AuthVM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AuthVM.prototype.register = function (username, password) {
        this.auth.addUser(new user_1.default(username, password));
    };
    return AuthVM;
}(base_vm_1.default));
module.exports = AuthVM;
