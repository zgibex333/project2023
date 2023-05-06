import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleTypesTabs from './ArticleTypesTabs';
import { ArticleType } from '@/entities/Article';

export default {
    title: 'entities/Article/ArticleTypesTabs',
    component: ArticleTypesTabs,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTypesTabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleTypesTabs> = (args) => (
    <ArticleTypesTabs {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    value: ArticleType.IT,
};
