import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'feature/LoginForm',
    component: LoginForm,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof LoginForm> = (args) => (
    <LoginForm {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {};
Primary.decorators = [
    StoreDecorator({
        loginForm: {
            password: '123',
            username: 'User',
        },
    }),
];
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    StoreDecorator({
        loginForm: {
            password: '123',
            username: 'User',
        },
    }),
];
export const WithError = Template.bind({});
WithError.args = {};
WithError.decorators = [
    StoreDecorator({
        loginForm: {
            password: '123',
            username: 'User',
            error: 'Error',
        },
    }),
];
export const isLoading = Template.bind({});
isLoading.args = {};
isLoading.decorators = [
    StoreDecorator({
        loginForm: {
            password: '123',
            username: 'User',
            isLoading: true,
        },
    }),
];
