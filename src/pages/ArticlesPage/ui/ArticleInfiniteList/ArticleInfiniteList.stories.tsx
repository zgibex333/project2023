import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleInfiniteList from './ArticleInfiniteList';

export default {
    title: 'pages/Article/ArticleInfiniteList',
    component: ArticleInfiniteList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => (
    <ArticleInfiniteList {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.decorators = [StoreDecorator({})];
