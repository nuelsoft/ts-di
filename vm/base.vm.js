"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var injector_1 = __importDefault(require("../injector"));
var BaseViewModel = /** @class */ (function () {
    function BaseViewModel() {
        this._auth = injector_1.default.retrieve("auth");
        this._joke = injector_1.default.retrieve("jokes");
    }
    Object.defineProperty(BaseViewModel.prototype, "auth", {
        get: function () {
            return this._auth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BaseViewModel.prototype, "joke", {
        get: function () {
            return this._joke;
        },
        enumerable: false,
        configurable: true
    });
    return BaseViewModel;
}());
module.exports = BaseViewModel;
