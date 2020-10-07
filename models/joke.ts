class Joke {
    text: string
    addedBy: string
    dateAdded: number

    constructor(text: string, addedBy: string) {
        this.text = text;
        this.addedBy = addedBy;
        this.dateAdded = Date.now();
    }

    toJSON(): Object {
        return {
            text: this.text,
            addedBy: this.addedBy,
            dateAdded: this.dateAdded
        }
    }

}

export = Joke;