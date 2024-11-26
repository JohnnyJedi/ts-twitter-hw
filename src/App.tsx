import './App.css'
import Navigation from "./components/Navigation.jsx";
import Body from "./components/Body.jsx";
import {useState} from "react";
import {TwitterContext} from "./utils/context.js";
import {StatsType} from "./utils/types";





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

    const isValidUrl = (url: string) => {
        try {
            new URL(url); // Бросит ошибку, если строка — не валидный URL
            return true;
        } catch {
            return false;
        }
    };

    const handleUrl = (url:string) => {
        setUser((prevState) => ({
            ...prevState,
            avatar: isValidUrl(url) ? url : user.avatar,
        }))
    }
    const handleName = (name:string) => {
        setUser((prevState) => ({
            ...prevState,
            name: name || user.name
        }))
    }

    const handleStats = (field:keyof StatsType,value:number) => {
        setStats((prevState) => ({
            ...prevState,
            [field]: (prevState[field] + value >= 0 ? prevState[field] + value : prevState[field])
        }))
    }







    return (
        <div className={'app'}>
            <TwitterContext.Provider value={{
                user, stats, handleUrl, handleName,  handleStats,  //user:user , stats:stats
            }}>
                <Navigation/>
                <Body/>
            </TwitterContext.Provider>
        </div>
    );
};

export default App;
