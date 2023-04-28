import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import EditableProfileCardHeader from './EditableProfileCardHeader';

export default {
    title: 'feature/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof EditableProfileCardHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => (
    <EditableProfileCardHeader {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
