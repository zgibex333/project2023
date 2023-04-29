import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AdminPanelPage from './AdminPanelPage';

export default {
    title: 'shared/AdminPanelPage',
    component: AdminPanelPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AdminPanelPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AdminPanelPage> = (args) => (
    <AdminPanelPage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
