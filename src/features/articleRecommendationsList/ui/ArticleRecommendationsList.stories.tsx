import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleRecommendationsList from './ArticleRecommendationsList';

export default {
    title: 'feature/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleRecommendationsList>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => (
    <ArticleRecommendationsList {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
