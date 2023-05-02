import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import ProfilePage from './ProfilePage';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ProfilePage> = (args) => (
    <ProfilePage {...args} />
);

export const Regular = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Regular.args = {};
Regular.decorators = [
    StoreDecorator({
        profile: {
            form: {
                username: 'user',
                age: 26,
                first: 'John',
                lastname: 'Doe',
                city: 'Warszawa',
                country: Country.Poland,
                currency: Currency.EUR,
            },
        },
    }),
];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: {
            form: {
                username: 'user',
                age: 26,
                first: 'John',
                lastname: 'Doe',
                city: 'Warszawa',
                country: Country.Poland,
                currency: Currency.EUR,
            },
        },
    }),
];
