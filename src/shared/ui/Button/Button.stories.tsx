import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Button, THEME_BUTTON } from '.';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Primary button',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear button',
    theme: THEME_BUTTON.CLEAR,
};

export const BorderLight = Template.bind({});
BorderLight.args = {
    children: 'BorderLight',
    theme: THEME_BUTTON.BORDER,
};

export const BorderDark = Template.bind({});
BorderDark.args = {
    children: 'BorderDark',
    theme: THEME_BUTTON.BORDER,
};
BorderDark.decorators = [ThemeDecorator(THEME.DARK)];
