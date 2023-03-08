import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

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

export const Border = Template.bind({});
Border.args = {
    children: 'Border button',
    theme: THEME_BUTTON.BORDER,
};
