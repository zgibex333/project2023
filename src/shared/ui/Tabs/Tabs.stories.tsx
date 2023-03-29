import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Tabs from './Tabs';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {
    tabs: [
        { content: 'IT', value: 'IT' },
        { content: 'Economy', value: 'Economy' },
        { content: 'Entertainment', value: 'Entertainment' },
    ],
    value: 'Economy',
    onTabClick: action('onTabClick'),
};
