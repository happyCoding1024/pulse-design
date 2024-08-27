import React from 'react';
import { StoryObj, Meta } from '@storybook/react';

import Button from './index';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryObj<typeof Button> = (args: any) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  type: 'primary',
  children: 'Button',
};

const style={
  marginLeft: 8
}

export const Basic = () => {
  return <>
    <Button type="primary">Primary Button</Button>
    <Button style={style}>Default Button</Button>
    <Button type="dashed" style={style}>Dashed Button</Button>
    <br />
    <Button type="text">Text Button</Button>
    <Button type="link" style={style}>Link Button</Button>
  </>
}

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
};
