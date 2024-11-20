import './App.tsx'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";



// https://gravatar.com/avatar/000?d=retro
// https://gravatar.com/avatar/000?d=wavatar


const App = () => {
    const [user, setUser] = useState({
        name: 'Monster',
        avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    });
    const [stats, setStats] = useState({
        followers: 10,
        following: 100,
    });

    const handleUrl = (url:string) => {
        setUser((prevState) => ({
            ...prevState,
            avatar: url || user.avatar
        }))
    }
    const handleName = (name:string) => {
        setUser((prevState) => ({
            ...prevState,
            name: name || user.name
        }))
    }

    const handleFollowers = (n:number) => {
        setStats((prevState) => ({
            ...prevState,
            followers: (prevState.followers + n >= 0 ? prevState.followers + n : prevState.followers)
        }))
    }

    const handleFollowing = (n:number) => {
        setStats((prevState) => ({
            ...prevState,
            following: (prevState.following + n >= 0 ? prevState.following + n : prevState.following)
        }))
    }





    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, handleUrl, handleName, handleFollowers, handleFollowing  //user:user , stats:stats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    );
};

export default App;
