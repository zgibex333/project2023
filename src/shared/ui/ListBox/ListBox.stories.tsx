import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ListBox from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    decorators: [
        (Story) => (
            <div style={{ padding: '100px' }}>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof ListBox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ListBox> = (args) => (
    <ListBox {...args} />
);

export const TopLeft = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TopLeft.args = {
    direction: 'topLeft',
    items: [
        { content: '111111111111', value: '1111111111111' },
        { content: '222222222222', value: '222222222222' },
        { content: '333333333333', value: '333333333333' },
    ],
    defaultValue: 'Выбирай',
};

export const TopRight = Template.bind({});
TopRight.args = {
    direction: 'topRight',
    items: [
        { content: '111111111111', value: '1111111111111' },
        { content: '222222222222', value: '222222222222' },
        { content: '333333333333', value: '333333333333' },
    ],
    defaultValue: 'Выбирай',
};

export const BottomRight = Template.bind({});
BottomRight.args = {
    direction: 'bottomRight',
    items: [
        { content: '111111111111', value: '1111111111111' },
        { content: '222222222222', value: '222222222222' },
        { content: '333333333333', value: '333333333333' },
    ],
    defaultValue: 'Выбирай',
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
    direction: 'bottomLeft',
    items: [
        { content: '111111111111', value: '1111111111111' },
        { content: '222222222222', value: '222222222222' },
        { content: '333333333333', value: '333333333333' },
    ],
    defaultValue: 'Выбирай',
};
