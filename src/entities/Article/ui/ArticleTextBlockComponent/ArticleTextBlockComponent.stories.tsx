import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticleTextBlockComponent from './ArticleTextBlockComponent';

export default {
    title: 'shared/ArticleTextBlockComponent',
    component: ArticleTextBlockComponent,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleTextBlockComponent>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ArticleTextBlockComponent> = (args) => (
    <ArticleTextBlockComponent {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
