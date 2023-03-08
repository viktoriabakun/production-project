import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import { THEME } from 'app/providers/ThemeProvider';
import { Spinner } from '.';

export default {
    title: 'shared/Spinner',
    component: Spinner,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Spinner>;

const Template: ComponentStory<typeof Spinner> = (args) => <Spinner {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(THEME.DARK)];
