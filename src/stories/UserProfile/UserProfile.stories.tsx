import {Meta, StoryObj} from "@storybook/react";
import {UserProfile} from "./UserProfile";
import './userProfile.css'
import {Skeleton} from "react-styled-loading-skeleton";

const meta = {
    title: 'Blocks/UserProfile',
    component: UserProfile,
    parameters: {
        layout: 'centered',
    }
} satisfies Meta<typeof UserProfile>

export default meta;
type Story = StoryObj<typeof meta>;

export const Base = {
    args: {
        isLoading: true,
    },
    render: ({isLoading}) => {
        return isLoading ? <div className={'wrapper'}>
            <Skeleton width={80} height={80} isCircle />
            <div className={'user-info'}>
                <Skeleton widthPercentage={100} height={22} count={2} flex={{direction: 'column', gap: 8}}/>
                <Skeleton height={110}/>
            </div>
        </div> : <UserProfile/>;
    }
};