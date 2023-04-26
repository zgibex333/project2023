import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticleExample } from 'shared/lib/tests/ArticleExample/ArticleExample';
import {
    Article,
    ArticleBlockType,
    ArticleType,
} from '../../model/types/article';
import ArticleDetails from './ArticleDetails';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetails>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleDetails> = (args) => (
    <ArticleDetails {...args} />
);

export const Basic = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Basic.args = {};
Basic.decorators = [
    StoreDecorator({
        articleDetails: {
            data: ArticleExample,
        },
    }),
];
export const isLoading = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
isLoading.args = {};
isLoading.decorators = [
    StoreDecorator({
        articleDetails: {
            isLoading: true,
        },
    }),
];
export const Error = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Error.args = {};
Error.decorators = [
    StoreDecorator({
        articleDetails: {
            error: 'error',
        },
    }),
];
