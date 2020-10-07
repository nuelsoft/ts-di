import Joke from "../models/joke";

class JokeService {
    private _jokes: Array<Joke> = []

    addJoke(joke: Joke): void {
        this._jokes.push(joke);
        console.log(`Joke added by ${joke.addedBy} ::: created at ${new Date(joke.dateAdded)}`)
    }

    get jokes(): string {
        return JSON.stringify(this._jokes)
    }
}

export = JokeService