import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import ArticleDetailsComments from './ArticleDetailsComments';

export default {
    title: 'pages/Article/ArticleDetailsComments',
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
Primary.decorators = [
    StoreDecorator({
        articleDetailsPage: {
            comments: {
                ids: ['1'],
                entities: {
                    '1': {
                        id: '1',
                        text: 'Random text',
                        user: {
                            avatar: '',
                            id: '1',
                            username: 'fdf',
                        },
                    },
                },
            },
        },
    }),
];
