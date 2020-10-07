class User {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    private getPasswordString(): string {
        return this.password.replace(/.*/g, '****');
    }

    toString(): string {
        return `username -> ${this.username} ::: password -> ${this.getPasswordString()}`
    }

}

export = User;