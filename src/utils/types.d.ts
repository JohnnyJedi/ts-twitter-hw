type UserType = Record<'name'|'avatar', string>;
type StatsType = Record<'followers'|'following', number>

export interface ContextTypes {
    user: UserType,
    stats: StatsType,
    handleUrl: (url:string) => void,
    handleName: (name:string) => void,
    handleFollowers: (followers:number) => void,
    handleFollowing: (following:number) => void,
}