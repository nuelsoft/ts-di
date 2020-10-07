"use strict";
var Joke = /** @class */ (function () {
    function Joke(text, addedBy) {
        this.text = text;
        this.addedBy = addedBy;
        this.dateAdded = Date.now();
    }
    Joke.prototype.toJSON = function () {
        return {
            text: this.text,
            addedBy: this.addedBy,
            dateAdded: this.dateAdded
        };
    };
    return Joke;
}());
module.exports = Joke;
