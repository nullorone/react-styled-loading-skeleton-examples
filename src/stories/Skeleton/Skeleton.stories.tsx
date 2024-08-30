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
        width: {control: { type: 'range', min: 0, max: 800, step: 50 }},
        height: {control: { type: 'range', min: 0, max: 100, step: 5 }},
        rounded: {control: 'select', options: [undefined, 2, 4, 8, 12, 16, 20]},
        timingFunc: { control: 'select', options: ['ease', 'ease-in', 'ease-in-out', 'ease-out'] },
        direction: { control: 'select', options: ['row', 'column'] },
        gap: {control: { type: 'range', min: 2, max: 12, step: 1 }},
    }
} satisfies Meta<typeof Skeleton>

export default meta;
type Story = StoryObj<typeof meta>;

export const BaseUsage = {
    args: {
        width: 500,
        height: 30,
        rounded: 2,
        isCircle: false,
        duration: 1500,
        baseColor: '#e9e9e9',
        highlightColor: '#f9f9f9',
        gradient: '90deg, #e9e9e9, #f9f9f9, #e9e9e9',
        withoutAnimation: false
    },
};

export const ColsAndRows = {
    args: {
        width: 100,
        height: 30,
        count: 4
    },
    render: ({gap, direction, ...props}) => {
        return <Skeleton {...props} flex={{gap: gap ?? 2, direction: direction ?? 'row'}}/>;
    }
};
