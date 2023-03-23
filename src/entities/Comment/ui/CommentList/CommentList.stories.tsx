import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import CommentList from './CommentList';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof CommentList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CommentList> = (args) => (
    <CommentList {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    comments: [
        {
            id: '1',
            text: 'Lorem ipsum ...',
            user: {
                id: '1',
                username: 'username1',
            },
        },
        {
            id: '2',
            text: 'Lorem ipsum ...',
            user: {
                id: '2',
                username: 'username2',
            },
        },
    ],
};

export const IsLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
IsLoading.args = {
    isLoading: true,
};
