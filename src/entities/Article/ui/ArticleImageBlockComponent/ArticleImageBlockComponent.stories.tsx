import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleImageBlockComponent from './ArticleImageBlockComponent';

export default {
    title: 'shared/ArticleImageBlockComponent',
    component: ArticleImageBlockComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleImageBlockComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleImageBlockComponent> = (args) => (
    <ArticleImageBlockComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
