import React from 'react';
import Center from './Center';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Center',
  component: Center,
  argTypes: {
    gutters: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Center {...args}>Content of the Center</Center>;
const TemplateIntrinsic = (args) => (
  <Center {...args}>
    <div>Content of the Center</div>
  </Center>
);

const defaultArgs = {
  gutters: 0,
  max: CSS_VARIABLES.measure,
  andText: false,
  intrinsic: false,
};

export const Default = Template.bind({});
Default.args = defaultArgs;

export const CenterText = Template.bind({});
CenterText.args = {
  ...defaultArgs,
  andText: true,
};

export const CenterIntrinsic = TemplateIntrinsic.bind({});
CenterIntrinsic.args = {
  ...defaultArgs,
  intrinsic: true,
};
