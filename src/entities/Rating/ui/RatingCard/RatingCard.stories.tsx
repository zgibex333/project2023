import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import RatingCard from './RatingCard';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
    title: 'entities/Rating/RatingCard',
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

export const WithoutFeedback = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithoutFeedback.args = {};
WithoutFeedback.decorators = [StoreDecorator({})];

export const WithFeedback = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WithFeedback.args = {
    hasFeedback: true,
    feedbackTitle: 'Ваш фидбек',
};
WithFeedback.decorators = [StoreDecorator({})];
