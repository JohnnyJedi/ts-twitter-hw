import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import * as React from "react";

const Stats = () => {
    const {user, stats, handleFollowers, handleFollowing} = useContext(TwitterContext);

    const eventFollowing = (e:React.MouseEvent<HTMLDivElement>) => {
        switch (e.button) {
            case 0:
                return handleFollowing(1);
            case 2:
                // e.preventDefault();
                return handleFollowing(-1);
        }
    }

    const eventFollowers = (e:React.MouseEvent<HTMLDivElement>) => {
        switch (e.button) {
            case 0:
                return handleFollowers(1);
            case 2:
                // e.preventDefault();
                return handleFollowers(-1);
        }
    }


    return (
        <div className={'user-stats'}>

            <div>
                <Avatar/>
                {user.name}
            </div>

            <div className={'stats'}>
                <div style={{cursor: 'cell'}} onContextMenu={(e) => e.preventDefault()} onMouseDown={eventFollowers}>
                    Followers : {stats.followers}
                </div>
                <div style={{cursor: 'cell'}} onContextMenu={(e) => e.preventDefault()} onMouseDown={eventFollowing}>
                    Following : {stats.following}
                </div>
            </div>

        </div>
    );
};

export default Stats;