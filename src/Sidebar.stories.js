import React from 'react';
import Sidebar from './Sidebar';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Sidebar',
  component: Sidebar,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
    side: {
      options: ['left', 'rigth'],
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <Sidebar {...args}>
    <div>Sidebar content</div>
    <div>Main content</div>
  </Sidebar>
);

const defaultArgs = {
  space: CSS_VARIABLES.space.s1,
  side: 'left',
  sideWidth: null,
  contentMin: '50%',
};

export const Default = Template.bind({});
Default.args = defaultArgs;
