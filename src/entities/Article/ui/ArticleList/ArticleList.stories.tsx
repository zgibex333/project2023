import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleExample } from '@/shared/lib/tests/ArticleExample/ArticleExample';
import ArticleList from './ArticleList';
import { ArticleView } from '../../model/consts/consts';

export default {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleList> = (args) => (
    <ArticleList {...args} />
);

export const BasicList = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicList.args = {
    articles: new Array(4).fill(0).map((_) => ArticleExample),
};

export const BasicListLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicListLoading.args = {
    isLoading: true,
    articles: [],
};

export const BasicGrid = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicGrid.args = {
    articles: new Array(4).fill(0).map((_) => ArticleExample),
    view: ArticleView.GRID,
};

export const BasicGridIsLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
BasicGridIsLoading.args = {
    isLoading: true,
    view: ArticleView.GRID,
    articles: [],
};
