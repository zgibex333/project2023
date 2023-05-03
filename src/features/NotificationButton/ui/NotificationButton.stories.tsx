import React from 'react';
import withMock from 'storybook-addon-mock';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import NotificationButton from './NotificationButton';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { FlexDecorator } from '@/shared/config/storybook/FlexDecorator/FlexDecorator';

export default {
    title: 'feature/NotificationButton',
    component: NotificationButton,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [withMock, StoreDecorator({}), FlexDecorator('row')],
} as ComponentMeta<typeof NotificationButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NotificationButton> = (args) => (
    <NotificationButton {...args} />
);

export const LoadedNotifications = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LoadedNotifications.args = {};
LoadedNotifications.parameters = {
    mockData: [
        {
            url: `${__API__}/notifications`,
            method: 'GET',
            status: 200,
            response: [
                {
                    description: 'description text',
                    id: '1',
                    title: 'title',
                    href: '#',
                },
                {
                    description: 'description text2',
                    id: '2',
                    title: 'title2',
                },
            ],
        },
    ],
};
