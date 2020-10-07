"use strict";
var JokeService = /** @class */ (function () {
    function JokeService() {
        this._jokes = [];
    }
    JokeService.prototype.addJoke = function (joke) {
        this._jokes.push(joke);
        console.log("Joke added by " + joke.addedBy + " ::: created at " + new Date(joke.dateAdded));
    };
    Object.defineProperty(JokeService.prototype, "jokes", {
        get: function () {
            return JSON.stringify(this._jokes);
        },
        enumerable: false,
        configurable: true
    });
    return JokeService;
}());
module.exports = JokeService;
