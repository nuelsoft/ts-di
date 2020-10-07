"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var secretary_1 = __importDefault(require("./secretary"));
var auth_vm_1 = __importDefault(require("./vm/auth.vm"));
var joke_vm_1 = __importDefault(require("./vm/joke.vm"));
secretary_1.default().then(function () {
    var _a;
    var authVM = new auth_vm_1.default();
    var jokeVM = new joke_vm_1.default();
    authVM.register("johnny", "123");
    console.log((_a = authVM.auth.admin) === null || _a === void 0 ? void 0 : _a.toString());
    jokeVM.addJoke("The turtle doesn't swim to the east");
    jokeVM.addJoke("The turtle doesn't swim to the north");
    jokeVM.addJoke("The turtle doesn't swim to the west");
    console.log(jokeVM.fetchJokes());
});
