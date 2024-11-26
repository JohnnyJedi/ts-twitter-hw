import Avatar from "./Avatar.jsx";
import {useContext} from "react";
import {TwitterContext} from "../utils/context.js";
import * as React from "react";

const Stats = () => {
    const {user, stats, handleStats} = useContext(TwitterContext);

    const eventStats = (e: React.MouseEvent<HTMLDivElement>) => {
        const field = e.currentTarget.getAttribute('data-field') as keyof typeof stats;
        if (!field) return;
        switch (e.button) {
            case 0:
                return handleStats(field, 1);
            case 2:
                // e.preventDefault();
                return handleStats(field, -1);
        }
    }


    return (
        <div className={'user-stats'}>

            <div>
                <Avatar/>
                {user.name}
            </div>

            <div className={'stats'}>
                <div style={{cursor: 'cell'}} data-field={'followers'} onContextMenu={(e) => e.preventDefault()}
                     onMouseDown={eventStats}>
                    Followers : {stats.followers}
                </div>
                <div style={{cursor: 'cell'}} data-field={'following'} onContextMenu={(e) => e.preventDefault()}
                     onMouseDown={eventStats}>
                    Following : {stats.following}
                </div>
            </div>

        </div>
    );
};

export default Stats;