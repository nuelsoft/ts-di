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
var joke_1 = __importDefault(require("../models/joke"));
var JokeVM = /** @class */ (function (_super) {
    __extends(JokeVM, _super);
    function JokeVM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JokeVM.prototype.addJoke = function (text) {
        if (this.auth.admin)
            this.joke.addJoke(new joke_1.default(text, this.auth.admin.username));
    };
    JokeVM.prototype.fetchJokes = function () {
        return this.joke.jokes;
    };
    return JokeVM;
}(base_vm_1.default));
module.exports = JokeVM;
