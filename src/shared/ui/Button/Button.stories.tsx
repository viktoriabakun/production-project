import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Button, BUTTON_SIZE, BUTTON_THEME } from '.';

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

export const Disabled = Template.bind({});
Disabled.args = {
    children: 'Disabled button',
    disabled: true,
    theme: BUTTON_THEME.BACKGROUND,
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear button',
    theme: BUTTON_THEME.CLEAR,
};

export const ClearInverted = Template.bind({});
ClearInverted.args = {
    children: 'Clear inverted button',
    theme: BUTTON_THEME.CLEAR_INVERTED,
};

export const BorderLight = Template.bind({});
BorderLight.args = {
    children: 'Border Light',
    theme: BUTTON_THEME.BORDER,
};

export const BorderDark = Template.bind({});
BorderDark.args = {
    children: 'Border Dark',
    theme: BUTTON_THEME.BORDER,
};
BorderDark.decorators = [ThemeDecorator(THEME.DARK)];

export const BorderSizeM = Template.bind({});
BorderSizeM.args = {
    children: 'Size M',
    theme: BUTTON_THEME.BORDER,
    size: BUTTON_SIZE.M,
};

export const BorderSizeL = Template.bind({});
BorderSizeL.args = {
    children: 'Size L',
    theme: BUTTON_THEME.BORDER,
    size: BUTTON_SIZE.L,
};

export const BorderSizeXL = Template.bind({});
BorderSizeXL.args = {
    children: 'Size XL',
    theme: BUTTON_THEME.BORDER,
    size: BUTTON_SIZE.XL,
};

export const Background = Template.bind({});
Background.args = {
    children: 'Background',
    theme: BUTTON_THEME.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Background Inverted',
    theme: BUTTON_THEME.BACKGROUND_INVERTED,
};

export const SquareSizeM = Template.bind({});
SquareSizeM.args = {
    children: '>',
    theme: BUTTON_THEME.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    theme: BUTTON_THEME.BACKGROUND_INVERTED,
    square: true,
    size: BUTTON_SIZE.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    theme: BUTTON_THEME.BACKGROUND_INVERTED,
    square: true,
    size: BUTTON_SIZE.XL,
};
