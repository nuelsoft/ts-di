import Injector from "./injector";
import AuthService from "./services/auth";
import JokeService from "./services/joke";

const initialize = () => {
    Injector.register(new AuthService(), "auth");
    Injector.register(new JokeService(), "jokes");
};

export default initialize;