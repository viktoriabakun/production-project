import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { APP_LINK_THEME, AppLink } from '.';

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
        to: '/',
    },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />;

/**
 * PRIMARY
 */
export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    children: 'Primary AppLink Light',
    theme: APP_LINK_THEME.PRIMARY,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    children: 'Primary AppLink Dark',
    theme: APP_LINK_THEME.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)];

/**
 * SECONDARY
 */
export const SecondaryLight = Template.bind({});
SecondaryLight.args = {
    children: 'Secondary AppLink',
    theme: APP_LINK_THEME.SECONDARY,
};

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
    children: 'Secondary AppLink Dark',
    theme: APP_LINK_THEME.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(THEME.DARK)];

/**
 * RED
 */
export const Red = Template.bind({});
Red.args = {
    children: 'Red AppLink',
    theme: APP_LINK_THEME.RED,
};
