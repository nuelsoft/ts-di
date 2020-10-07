import User from "../models/user";

class AuthService {
    admin: User | undefined

    addUser(user: User): void {
        this.admin = user;
        console.log("added user as admin")

    }

}

export = AuthService;