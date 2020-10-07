import AuthService from "../services/auth";
import JokeService from "../services/joke";
import Injector from "../injector";

class BaseViewModel {
    private readonly _auth: AuthService
    private readonly _joke: JokeService

    get auth(): AuthService {
        return this._auth;
    }

    get joke(): JokeService {
        return this._joke;
    }

    constructor() {
        this._auth = Injector.retrieve<AuthService>("auth");
        this._joke = Injector.retrieve<JokeService>("jokes")
    }
}

export = BaseViewModel;