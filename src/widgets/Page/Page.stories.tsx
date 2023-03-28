import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Page } from './Page';

export default {
    title: 'shared/Page',
    component: Page,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Page>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
