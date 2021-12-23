import React from 'react';
import Imposter from './Imposter';
import Box from './Box';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Imposter',
  component: Imposter,
  argTypes: {
    margin: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <Imposter {...args}>
    <Box>Content of the Imposter</Box>
  </Imposter>
);

export const Default = Template.bind({});
Default.args = {
  margin: CSS_VARIABLES.space.s1,
  breakout: true,
  fixed: true,
};
