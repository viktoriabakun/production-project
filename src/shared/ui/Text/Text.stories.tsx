import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text, TEXT_THEME } from 'shared/ui/Text/index';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
    args: {
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

/**
 * Light
 */
export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};

export const OnlyTitleLight = Template.bind({});
OnlyTitleLight.args = {
    title: 'Title lorem ipsum',
};

export const OnlyTextLight = Template.bind({});
OnlyTextLight.args = {
    text: 'Text lorem ipsum',
};

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Title error',
    text: 'Text error lorem ipsum',
    theme: TEXT_THEME.ERROR,
};

/**
 * Dark
 */

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    title: 'Title lorem ipsum',
    text: 'Text lorem ipsum',
};
PrimaryDark.decorators = [ThemeDecorator(THEME.DARK)];

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    title: 'Title lorem ipsum',
};
OnlyTitleDark.decorators = [ThemeDecorator(THEME.DARK)];

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    text: 'Text lorem ipsum',
};
OnlyTextDark.decorators = [ThemeDecorator(THEME.DARK)];

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Title error',
    text: 'Text error lorem ipsum',
    theme: TEXT_THEME.ERROR,
};
ErrorDark.decorators = [ThemeDecorator(THEME.DARK)];
