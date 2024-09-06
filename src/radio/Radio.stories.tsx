import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Radio from './index';

export default {
  title: 'Example/Radio',
  component: Radio,
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type: 'primary',
  children: 'Radio',
};

export const Basic = () => {
  return <>
    <Radio type="primary">Primary Radio</Radio>
  </>;
};
