import Injector from "./injector";
import AuthService from "./services/auth";
import JokeService from "./services/joke";

const initialize = async () => {
    await Injector.register(new AuthService(), "auth");
    await Injector.register(new JokeService(), "jokes");
};

export default initialize;