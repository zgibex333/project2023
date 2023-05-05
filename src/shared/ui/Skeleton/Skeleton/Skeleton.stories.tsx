import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Skeleton } from './Skeleton';
import { Theme } from '@/shared/const/Theme';

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Skeleton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Skeleton> = (args) => (
    <Skeleton {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    width: '100%',
    height: '200px',
};

export const Circle = Template.bind({});
Circle.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};

export const BasicDark = Template.bind({});
BasicDark.args = {
    width: '100%',
    height: '200px',
};
BasicDark.decorators = [ThemeDecorator(Theme.DARK)];

export const CircleDark = Template.bind({});
CircleDark.args = {
    border: '50%',
    width: '100px',
    height: '100px',
};
CircleDark.decorators = [ThemeDecorator(Theme.DARK)];
