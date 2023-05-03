import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationItem from './NotificationItem';

export default {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NotificationItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationItem> = (args) => (
    <NotificationItem {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    item: {
        description: 'description text',
        id: '1',
        title: 'title',
    },
};

export const BasicWithHref = Template.bind({});
BasicWithHref.args = {
    item: {
        description: 'description text',
        id: '1',
        title: 'title',
        href: '#',
    },
};
