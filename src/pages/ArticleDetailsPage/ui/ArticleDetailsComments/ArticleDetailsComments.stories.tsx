import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleDetailsComments from './ArticleDetailsComments';

export default {
    title: 'shared/ArticleDetailsComments',
    component: ArticleDetailsComments,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsComments>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleDetailsComments> = (args) => (
    <ArticleDetailsComments {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
