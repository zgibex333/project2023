import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentCard from './CommentCard';

export default {
    title: 'entities/CommentList/CommentCard',
    component: CommentCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommentCard> = (args) => (
    <CommentCard {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    comment: {
        id: '1',
        text: 'Lorem ipsum ...',
        user: {
            id: '1',
            username: 'username1',
        },
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};
