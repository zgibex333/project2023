import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import Avatar from 'shared/assets/tests/avatar-test.jpg';
import ProfileCard from './ProfileCard';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'enities/ProfileCard',
    component: ProfileCard,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfileCard> = (args) => (
    <ProfileCard {...args} />
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    data: {
        username: 'user',
        age: 26,
        avatar: Avatar,
        first: 'John',
        lastname: 'Doe',
        city: 'Warszawa',
        country: Country.Poland,
        currency: Currency.EUR,
    },
};

export const isLoading = Template.bind({});
isLoading.args = {
    isLoading: true,
};

export const withError = Template.bind({});
withError.args = {
    error: 'error',
};
