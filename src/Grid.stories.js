import React from 'react';
import Grid from './Grid';
import { CSS_VARIABLES } from './constants';

export default {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    space: {
      options: Object.values(CSS_VARIABLES.space),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => (
  <Grid {...args}>
    <div>Cell #1</div>
    <div>Cell #2</div>
    <div>Cell #3</div>
    <div>Cell #4</div>
  </Grid>
);

export const Default = Template.bind({});
Default.args = {
  space: CSS_VARIABLES.space.s1,
  min: '250px',
};
