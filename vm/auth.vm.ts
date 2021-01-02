import BaseViewModel from "./base.vm";
import User from "../models/user";

class AuthVM extends BaseViewModel {
    register(username: string, password: string) {
        this.auth.addUser(new User(username, password))
    }
}

export = AuthVM;
// eod

