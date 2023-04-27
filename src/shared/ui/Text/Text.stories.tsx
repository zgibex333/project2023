import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import Text, { TextSize, TextTheme } from './Text';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'shared/Text',
    component: Text,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const SimpleText = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SimpleText.args = {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};

export const SimpleTitle = Template.bind({});
SimpleTitle.args = {
    title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};

export const BothTitleAndTextSizeM = Template.bind({});
BothTitleAndTextSizeM.args = {
    size: TextSize.M,
    title: 'It is a long ',
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};

export const BothTitleAndTextSizeL = Template.bind({});
BothTitleAndTextSizeL.args = {
    size: TextSize.L,
    title: 'It is a long ',
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};

export const SimpleTextDark = Template.bind({});
SimpleTextDark.args = {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};
SimpleTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SimpleTitleDark = Template.bind({});
SimpleTitleDark.args = {
    title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};
SimpleTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BothTitleAndTextDark = Template.bind({});
BothTitleAndTextDark.args = {
    title: 'It is a long ',
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
};
BothTitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    theme: TextTheme.ERROR,
};

export const ErrorTitle = Template.bind({});
ErrorTitle.args = {
    title: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    theme: TextTheme.ERROR,
};

export const BothTitleAndTextError = Template.bind({});
BothTitleAndTextError.args = {
    title: 'It is a long ',
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    theme: TextTheme.ERROR,
};

export const SizeS = Template.bind({});
SizeS.args = {
    title: 'It is a long ',
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
    theme: TextTheme.ERROR,
    size: TextSize.S,
};
