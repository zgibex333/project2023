import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Popover from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Popover>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Popover> = (args) => (
    <Popover {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    trigger: <button type="button">Trigger</button>,
    children: (
        <div>
            <p>card1</p>
            <p>card2</p>
            <p>card3</p>
        </div>
    ),
};
