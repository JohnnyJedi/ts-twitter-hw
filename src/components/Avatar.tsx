import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import * as React from "react";

interface AvatarProps {
    size?:string | null,
}

const Avatar = ({size}:AvatarProps) => {
    const {user, handleUrl, handleName} = useContext(TwitterContext);

    const avatarUrl = () => prompt('Enter your avatar URL');
    const avatarName = () => prompt('Enter your name');

    const eventMouse = (e:React.MouseEvent<HTMLImageElement>) => {
        switch (e.button) {
            case 0:
                return handleUrl(avatarUrl()!);
            case 2:
                return handleName(avatarName()!);
        }
    }


    return (
        <img onMouseDown={eventMouse}
             onContextMenu={(e) => e.preventDefault()}
             style={{cursor: 'pointer'}}
             className={`user-avatar ${size ?? ''}`}
             src={user.avatar}
             alt={user.name}/>
    );
};

export default Avatar;