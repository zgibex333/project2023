import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RatingCard from './RatingCard';

export default {
    title: 'shared/RatingCard',
    component: RatingCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RatingCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RatingCard> = (args) => (
    <RatingCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
