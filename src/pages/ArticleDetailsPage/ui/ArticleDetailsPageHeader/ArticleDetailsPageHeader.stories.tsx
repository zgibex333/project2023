import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsPageHeader from './ArticleDetailsPageHeader';

export default {
    title: 'Pages/Article/ArticleDetailsPageHeader',
    component: ArticleDetailsPageHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleDetailsPageHeader>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleDetailsPageHeader> = (args) => (
    <ArticleDetailsPageHeader {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.decorators = [StoreDecorator({})];

export const ForLoggedInUser = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ForLoggedInUser.args = {};
ForLoggedInUser.decorators = [
    StoreDecorator({
        user: {
            authData: {
                id: '1',
            },
        },
        articleDetails: {
            data: {
                user: {
                    id: '1',
                },
            },
        },
    }),
];
