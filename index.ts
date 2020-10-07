import initialize from "./secretary";
import AuthVM from "./vm/auth.vm";
import JokeVM from "./vm/joke.vm";

initialize()
const authVM = new AuthVM();

const jokeVM = new JokeVM();

authVM.register("johnny", "123");

console.log(authVM.auth.admin?.toString());

jokeVM.addJoke("The turtle doesn't swim to the east");
jokeVM.addJoke("The turtle doesn't swim to the north");
jokeVM.addJoke("The turtle doesn't swim to the west");

console.log(jokeVM.fetchJokes());
