import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Drawer from './Drawer';

export default {
    title: 'shared/Drawer',
    component: Drawer,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Drawer>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Drawer> = (args) => <Drawer {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
