import BaseViewModel from "./base.vm";
import Joke from "../models/joke";

class JokeVM extends BaseViewModel {
    addJoke(text: string): void {
        if (this.auth.admin)
            this.joke.addJoke(new Joke(text, this.auth.admin.username))
    }

    fetchJokes(): string {
        return this.joke.jokes
    }
}

export = JokeVM;