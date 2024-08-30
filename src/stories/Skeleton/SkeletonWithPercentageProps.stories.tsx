import {Meta, StoryObj} from "@storybook/react";
import {Skeleton} from "react-styled-loading-skeleton";

const meta = {
    title: 'Components/Skeleton',
    component: Skeleton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        widthPercentage: {control: { type: 'range', min: 0, max: 100, step: 5 }},
        heightPercentage: {control: { type: 'range', min: 0, max: 100, step: 5 }},
        roundedPercentage: {control: { type: 'range', min: 0, max: 100, step: 5 }}
    }
} satisfies Meta<typeof Skeleton>

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseUsageWithPercentage = {
    args: {
        widthPercentage: 50,
        heightPercentage: 25,
        roundedPercentage: 0
    },
    render: (props) => {
        return <div style={{width: '500px', height: '50px'}}><Skeleton {...props}/></div>
    }
};
