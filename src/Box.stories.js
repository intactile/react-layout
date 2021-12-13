import React from 'react';
import Box from './Box';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Box',
  component: Box,
  argTypes: {
    padding: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
    borderWidth: {
      control: {
        type: 'range',
        step: 1,
        min: 0,
        max: 10,
      },
    },
  },
};

const Template = (args) => (
  <div style={{ borderColor: 'black' }}>
    <Box {...args}>Content of the box</Box>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  padding: CSS_VARIABLES.space.s1,
  borderWidth: 0,
};
