import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleExample } from '@/shared/lib/tests/ArticleExample/ArticleExample';
import ArticleListItem from './ArticleListItem';
import { ArticleView } from '../../model/consts/consts';
import { Article } from '../../model/types/article';

export default {
    title: 'entities/Article/ArticleListItem',
    component: ArticleListItem,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleListItem>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleListItem> = (args) => (
    <ArticleListItem {...args} />
);

export const BasicGridElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicGridElement.args = {
    article: ArticleExample as Article,
    view: ArticleView.GRID,
};

export const BasicListElement = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicListElement.args = {
    article: ArticleExample as Article,
    view: ArticleView.LIST,
};
