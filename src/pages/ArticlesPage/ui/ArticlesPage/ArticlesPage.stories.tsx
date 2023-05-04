import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleExample } from '@/shared/lib/tests/ArticleExample/ArticleExample';
import ArticlesPage from './ArticlesPage';
import { Article } from '@/entities/Article';

export default {
    title: 'pages/Article/ArticlesPage',
    component: ArticlesPage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticlesPage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticlesPage> = (args) => (
    <ArticlesPage {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        articlesPage: {
            entities: {
                '1': ArticleExample as Article,
            },
            ids: ['1'],
        },
    }),
];

export const NoArticles = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
NoArticles.args = {};
NoArticles.decorators = [StoreDecorator({})];
