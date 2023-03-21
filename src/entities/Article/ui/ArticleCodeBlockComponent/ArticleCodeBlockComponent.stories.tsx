import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleCodeBlockComponent from './ArticleCodeBlockComponent';

export default {
    title: 'shared/ArticleCodeBlockComponent',
    component: ArticleCodeBlockComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleCodeBlockComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleCodeBlockComponent> = (args) => (
    <ArticleCodeBlockComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
