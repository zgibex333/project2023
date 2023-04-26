import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Flex from './Flex';

export default {
    title: 'shared/Flex',
    component: Flex,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Flex>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Row.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
};

export const Column = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Column.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    direction: 'column',
};

export const RowGap4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RowGap4.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '4',
};
export const RowGap8 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RowGap8.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '8',
};

export const RowGap16 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RowGap16.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '16',
};

export const RowGap32 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
RowGap32.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '32',
};
export const ColumnGap4 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColumnGap4.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    direction: 'column',
    gap: '4',
};
export const ColumnGap8 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColumnGap8.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '8',
    direction: 'column',
};

export const ColumnGap16 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColumnGap16.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '16',
    direction: 'column',
};

export const ColumnGap32 = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ColumnGap32.args = {
    children: (
        <>
            <p>item1</p>
            <p>item2</p>
            <p>item3</p>
            <p>item4</p>
        </>
    ),
    gap: '32',
    direction: 'column',
};
