import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditableProfileCard from './EditableProfileCard';

export default {
    title: 'feature/EditableProfileCard',
    component: EditableProfileCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableProfileCard> = (args) => (
    <EditableProfileCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
