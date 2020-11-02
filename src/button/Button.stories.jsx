import React from 'react';
import Button from './Button';

export default {
  title: 'Form/Button',
  component: Button,
};

const Template = (args) => <Button text="Shop now !" {...args} />;

export const Primary = Template.bind({});

export const Secondary = Template.bind({});
Secondary.args = { secondary: true };
