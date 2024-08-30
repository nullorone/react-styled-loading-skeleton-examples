import './userProfile.css'

export const UserProfile = () => (
    <div className={'wrapper'}>
        <div className={'avatar'}/>
        <div className={'user-info'}>
            <span className={'user-name'}>John Dao</span>
            <span className={'user-position'}>Developer</span>
            <span className={'user-description'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad adipisci aliquam, at blanditiis consectetur consequuntur cum
            </span>
        </div>
    </div>
)