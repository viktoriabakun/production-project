import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import Input from '.';

export default {
    title: 'shared/Input',
    component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    placeholder: 'Placeholder',
};