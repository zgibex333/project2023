import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ForbiddenPage from './ForbiddenPage';

export default {
    title: 'shared/ForbiddenPage',
    component: ForbiddenPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ForbiddenPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ForbiddenPage> = (args) => (
    <ForbiddenPage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
