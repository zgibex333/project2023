import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Dropdown from './Dropdown';
import Button from '../Button/Button';

export default {
    title: 'shared/Dropdown',
    component: Dropdown,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Dropdown>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => (
    <Dropdown {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    trigger: <Button>Button</Button>,
    items: [{ content: 'first' }, { content: 'second' }],
};
