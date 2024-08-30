import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {Skeleton} from 'react-styled-loading-skeleton';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary = {
  args: {
    isLoading: true,
  },
  render: ({isLoading}) => {
    return isLoading ? <Skeleton width={84} height={36} rounded={42}/> : <Button primary label={'Button'}/>;
  }
};