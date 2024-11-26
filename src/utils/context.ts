import {createContext} from "react";
import {ContextTypes} from "./types";

export const TwitterContext = createContext<ContextTypes>({
    user: {
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 10,
        following: 100,
    },
    handleUrl: (url: string) => console.log(url),
    handleName: (name: string) => console.log(name),
    handleStats: (field, value) => console.log(field, value),
})