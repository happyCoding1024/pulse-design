// @ts-nocheck
import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import Icon from './index';

export default {
  title: 'Example/Icon',
  component: Icon
} as Meta<typeof Icon>;

const Template: StoryObj<typeof Icon> = (args: any) => <Icon {...args} />;

export const Fixed = Template.bind({});
Fixed.args = {
  type: 'fixed',
};

export const Loading = Template.bind({});
Loading.args = {
  type: 'loading',
};