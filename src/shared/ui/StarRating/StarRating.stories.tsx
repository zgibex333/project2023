import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import StarRating from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof StarRating>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StarRating> = (args) => (
    <StarRating {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
